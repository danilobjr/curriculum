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
    },
    express: {
      development: {
        options: {
          port: 3000,
          script: 'app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('server', [
    'jshint',
    'express:development'
  ]);

  grunt.registerTask('default', ['server']);
};
