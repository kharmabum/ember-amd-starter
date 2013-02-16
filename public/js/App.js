//TODO make some content which explains how the app works, run the app itself on github pages
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
  'TrickyBitsView',
  'TrickyBitsRoute',
  'NavView'
],
function(Ember, Bootstrap, ApplicationView, IndexController, IndexView, IndexRoute, TrickyBitsView, TrickyBitsRoute, NavView) {
  var App = window.App = Ember.Application.create({
    ApplicationView: ApplicationView,

    IndexController: IndexController,
    IndexView: IndexView,
    IndexRoute: IndexRoute,

    TrickyBitsView: TrickyBitsView,
    TrickyBitsRoute: TrickyBitsRoute,

    NavView: NavView
  });

  App.Router.map(function() {
    this.route('index');
    this.route('tricky_bits');
  });

  return App;
});
