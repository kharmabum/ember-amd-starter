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
  'IndexRoute',
  'OtherView',
  'OtherRoute',
  'NavView'
],
function(Ember, Bootstrap, ApplicationView, IndexController, IndexView, IndexRoute, OtherView, OtherRoute, NavView) {
  var App = window.App = Ember.Application.create({
    ApplicationView: ApplicationView,

    IndexController: IndexController,
    IndexView: IndexView,
    IndexRoute: IndexRoute,

    OtherView: OtherView,
    OtherRoute: OtherRoute,

    NavView: NavView
  });

  App.Router.map(function() {
    this.route('index');
    this.route('other');
  });

  return App;
});
