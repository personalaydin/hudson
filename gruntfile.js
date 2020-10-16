module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({

        // Sass
        sass: {
            dist: {
                files: {
                    'assets/css/style.min.css' : 'assets/_scss/style.scss'
                },
                options: {
                    compass: true,
                    sourceMap: false,
                    style: 'compressed'
                }
            }
        },

        // Uglify
        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        },

        jshint: {
            options: {
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            all: ['assets/js/scripts.js']
        },

        // AutoPrefixer
        autoprefixer: {
            options: {
                browsers: ['last 10 versions'],
                map: false
            },
            dist: {
                files:{
                  'assets/css/style.min.css':'assets/css/style.min.css'
                }
            }
        },

        newer: {
            options: {
                override: function(details, include) {
                    if (details.task == 'sass') {
                        include(true); // Newer Sass Import Problem Fixer
                    }
                }
            }
        },

        // Watch files for task run
        watch: {
            css: {
                files: 'assets/_scss/**/*.scss',
                tasks: ['newer:sass:dist:', 'autoprefixer:dist']
            },
            js: {
                files: 'assets/js/scripts.js',
                tasks: ['newer:uglify:build', 'newer:jshint']
            }
        }
    });

    // Load Task
    require('load-grunt-tasks')(grunt);

    // Register Task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['sass:dist', 'autoprefixer:dist', 'uglify:build']);
}
