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
    },

    clean: {
      build: ['.tmp', 'build/']
    },
    copy: {
      server: {
        src: ['package.json', 'app.js', 'server/**'],
        dest: 'build/'
      },
      locales: {
        src: 'locales/**',
        dest: 'build/'
      },
      styles: {
        src: 'public/css/fallback.css',
        dest: 'build/'
      },
      images: {
        src: 'public/images/**',
        dest: 'build/'
      },
      fonts: {
        src: 'public/fonts/**',
        dest: 'build/'
      },
      data: {
        src: 'public/data/**',
        dest: 'build/'
      }
    },
    useminPrepare: {
      html: 'server/views/index.ejs',
      options: {
        root: 'public/',
        dest: 'build/public/'
      }
    },
    usemin: {
      html: 'build/server/views/index.ejs'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('server', [
    'jshint',
    'express:dev',
    'open',
    'watch'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'clean:build',
    'copy',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin'
  ]);

  grunt.registerTask('default', ['server']);
};
