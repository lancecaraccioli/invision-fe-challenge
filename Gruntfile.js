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
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      minify: {
        files: {
          'app/app.css': 'app/app.css'
        }
      }
    },
    watch: {
      options: {
        livereload: 35729
      },
      js: {
        files: ['**/*.js'],
        tasks: ['jshint']
      },
      scss: {
        files: ['**/*.scss'],
        tasks: ['sass:build']
      },
      html: {
        files: ['**/*.html']
      }
    },
    connect: {
      webapp: {
        options: {
          port: 8000,
          hostname: '*',
          base: './app'
        }
      }
    }

  });

  grunt.registerTask('check-code-standards', [
    'jshint:validate'
  ]);
  grunt.registerTask('build', [
    'sass:build'
  ]);
  grunt.registerTask('dist', [
    'build',
    'cssmin:minify'
  ]);
  grunt.registerTask('serve', [
    'check-code-standards',
    'build',
    'connect:webapp',
    'watch'
  ]);
  grunt.registerTask('serve-dist', [
    'dist',
    'connect:webapp'
  ]);
  grunt.registerTask('default', [
    'serve'
  ]);

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

};
