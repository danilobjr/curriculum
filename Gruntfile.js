'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      server: {
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish'),
          ignores: ['server/services/email.js']
        },
        files: {
          src: ['Gruntfile.js', 'app.js', 'server/**/*.js']
        }
      },
      client: {
        options: {
          jshintrc: 'public/js/.jshintrc',
          reporter: require('jshint-stylish')
        },
        files: {
          src: ['public/js/app/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('server', [
    'jshint'
  ]);

  grunt.registerTask('default', ['server']);
};
