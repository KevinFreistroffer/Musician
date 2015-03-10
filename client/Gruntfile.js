
// gruntfile.js

'use strict';

module.exports = function(grunt) {

     // grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-compass');
     grunt.loadNpmTasks('grunt-contrib-watch');

     grunt.initConfig({
          // uglify: {
          //      my_target: {
          //           files: {
          //                // compile to: [files to minimize]
          //                '_/js/script.js': ['_/components/js/script.js']
          //           } //files
          //      } //my_target
          // }, //uglify

          compass: {
               dev: {
                    options: {
                         config: 'config.rb'
                    } //options
               } //dev
          }, // compass
          watch: {
               options: { livereload: true },
               // scripts: {
               //      files: ['_/components/js/*.js'],
               //      tasks: ['uglify']
               // },
               sass: {
                    files: ['app/sass/*.scss',
                            'app/sass/layouts/{,*/}{,*/}*.scss',
                            'app/sass/layouts/{,*/}*.scss'
                            ],
                    tasks: ['compass:dev']
               },
               html: {
                    files: ['app/*.html']
               }
          }, // watch


     });

     grunt.registerTask('default', 'watch');

} // exports