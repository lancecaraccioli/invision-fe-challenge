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
      build: ['Gruntfile.js', 'app/**/*.js', '!app/bower_components/**/*.js']
    }

  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
