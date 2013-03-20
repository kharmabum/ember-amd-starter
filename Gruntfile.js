module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'public/js/*.js', 'test/spec/*.js']
    },
    requirejs: {
      compile: {
        options: {
          appDir: "public",
          baseUrl: "js/",
          dir: "public-build",
          optimizeCss: "standard",
          inlineText: true,
          removeCombined: true,
          keepBuildDir: true,
          pragmasOnSave: {
              excludeAfterBuild: !0
          },
          paths: {
            'ember': 'lib/ember',
            'handlebars': 'lib/handlebars',
            'bootstrap': 'lib/bootstrap',
            'jquery': 'lib/jquery',
            'hbs': 'lib/hbs',
    
            'template': '../template'
          },
          shim: {
            'jquery': {
              exports: 'jQuery'
            },
            'ember': {
              deps: ['jquery', 'handlebars'],
              exports: 'Ember'
            },
            'handlebars': {
              exports: 'Handlebars'
            }
          },
    
          hbs: {
            templateExtension: 'hbs',
            baseDir: 'template'
          },

          locale: "en_us",
          modules: [{
              name: "App"
          }]
        }
      }
    },
    jasmine: {
      src: [
        'public-build/js/App.js'
      ],
      options: {
        template: require('grunt-template-jasmine-requirejs'),
        specs: 'test/spec/**/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('default', ['jshint', 'requirejs', 'jasmine']);
};
