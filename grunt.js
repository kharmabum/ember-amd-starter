module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: ['grunt.js', 'public/js/*.js']
    },
    jshint: {
      options: {
        browser: true
      }
    },
    jasmine: {
      all: ['test/SpecRunner.html']
    },
    requirejs: {
      appDir: "public",
      baseUrl: "js/",
      dir: "public-build",
      optimizeCss: "standard",
      optimize: "none",
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
        templateExtension: 'hbs'
      },

      locale: "en_us",
      modules: [{
          name: "App"
      }]
    }
  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  //grunt.loadNpmTasks('grunt-sample');

  // Default task.
  grunt.registerTask('default', 'lint requirejs jasmine');
  grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.loadNpmTasks('grunt-requirejs');

};
