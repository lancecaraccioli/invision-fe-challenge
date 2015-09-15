module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    // reference to package.json for convenience
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: '.jshintrc'
      },
      validate: ['Gruntfile.js', 'app/**/*.js', '!app/bower_components/**/*.js']
    },
    sass: {
      options: {
        style: 'expanded'
      },
      build: {
        files: {
          'app/app.css': 'app/app.scss'
        }
      }
    }

  });

  grunt.registerTask('build', [
    'jshint:validate',
    'sass:build'
  ]);

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
