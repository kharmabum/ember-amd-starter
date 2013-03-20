module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    /*
    handlebars: {
      compile: {
        options: {
          amd: true,
          namespace: 'Ember.TEMPLATES',
          processName: function(filename) {
            //chop-off leading directory info as well as .hbs extension
            var idx = filename.lastIndexOf('/');
            idx = idx === -1 ? 0 : idx + 1;
            return filename.substr(idx, filename.length - idx - 4);
          }
        },
        files: [{
          expand: true,
          cwd: 'public/template/',
          src: ['*.hbs'],
          dest: 'public/template/compiled/',
          ext: '.js'
        }]
      }
    },
    */
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
  //grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.registerTask('default', ['requirejs', 'jasmine']);
};
