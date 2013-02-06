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
    templateExtension: 'hbs',
    baseDir: 'template'
  }
});

requirejs([
  'ember',
  'bootstrap',
  'ApplicationView',
  'IndexController',
  'IndexView',
  'IndexRoute'
],
function(Ember, Bootstrap, ApplicationView, IndexController, IndexView, IndexRoute) {
  //Need to leak the Application to global scope so that global paths will work (e.g. 'App.router.indexController')
  var App = window.App = Ember.Application.create({
    ApplicationView: ApplicationView,

    IndexController: IndexController,
    IndexView: IndexView,
    IndexRoute: IndexRoute
  });

  App.Router.map(function() {
    this.route('index');
  });

  return App;
});
