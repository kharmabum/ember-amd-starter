requirejs.config({
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
  }
});

requirejs([
  'ember',
  'bootstrap',
  'Router',
  'ApplicationController',
  'ApplicationView',
  'IndexController',
  'IndexView'
],
function(Ember, Bootstrap, Router, ApplicationController, ApplicationView, IndexController, IndexView) {
  var App = Ember.Application.create({
    ApplicationController: ApplicationController,
    ApplicationView: ApplicationView,

    IndexController: IndexController,
    IndexView: IndexView,

    Router: Router
  });
});
