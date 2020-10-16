<div class="news__item col-xs-12 col-sm-6 col-md-4">
    <div class="catalogue">
        <a href="javascript:void(0);" class="catalogue__img" data-light-gallery="<?php echo $galleryStart ?>">
            <img src="<?php echo $item['thumb']; ?>">
            <div class="catalogue__content catalogue__content__news catalogue__content--2" id="news-<?php echo $key; ?>">
                <h5><?php echo $item['title']; ?></h5>
                <div>
                    <div><?php echo $item['date']; ?></div>
                    <div class="catalogue__content__date"><?php echo $item['year']; ?></div>
                </div>
            </div>
        </a>
    </div>
</div>