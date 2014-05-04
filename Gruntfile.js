'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    config: {
      port: process.env.PORT || 3000
    },
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
      dev: {
        options: {
          port: '<%= config.port %>',
          script: 'app.js'
        }
      }
    },
    open: {
      dev: {
        path: 'http://localhost:<%= config.port %>/'
      }
    },
    watch: {
      express: {
        options: {
          spawn: false
        },
        files: ['app.js', 'server/**/*.js'],
        tasks: ['jshint:server', 'express:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', [
    'jshint',
    'express:dev',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', ['server']);
};
