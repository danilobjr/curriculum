'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      server: {
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish')
        },
        files: {
          src: ['Gruntfile.js', 'app.js', 'server/**/*.js']
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
