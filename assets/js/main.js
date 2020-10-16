$(document).ready(function (){
    isMobile = $(window).width() < 992;
	$(".btn-contact").click(function() {
        $('.fullscreen-menu').removeClass('active');
        $('header').removeClass('fixed');

        if (isMobile) {
            if (!$('.hamburger__icon').hasClass('active')) {
                $('.mobile-logo').removeClass('hidden');
                $('.desktop-logo').addClass('hidden');
            } else {
                $('.mobile-logo').addClass('hidden');
                $('.desktop-logo').removeClass('hidden');
                $('.hamburger__icon').removeClass('active');
            }
        }
	    $('html, body').animate({
	        scrollTop: $(".contact").offset().top
	    }, 900);
	});

	$(".minicard").hover(function() {
		$(this).find('.mgm-btn').toggleClass('active');
	});

	$(".hamburger__icon").click(function() {
		$(this).toggleClass('active');
		$('.fullscreen-menu').toggleClass('active');
		$('header').toggleClass('fixed');
        if ($('.hamburger__icon').hasClass('active')) {
            $('.mobile-logo').removeClass('hidden');
            $('.desktop-logo').addClass('hidden');
        } else {
            $('.mobile-logo').addClass('hidden');
            $('.desktop-logo').removeClass('hidden');
        }
	});

    $('.products-gallery').magnificPopup({
        delegate: 'a.product__item',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                var title = item.el.find('.product__item__title').text();
                return title;
            }
        }
    });

    $('.js-popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
   

       
        $(".message").click(function () { 

            $(".message").text("link copied");
           
            $("#status").show();
            $("#more").hide();  
            pageTracker._trackPageview('/?q=/more');
            var u = nexturl;
           
          });
          
       
 });
 
    function myFunction() {
  var copyText = document.getElementById("modalInputOne");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};

function myFunction() {
    var copyText = document.getElementById("modalInputTwo");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  };

