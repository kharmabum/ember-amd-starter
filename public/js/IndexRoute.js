define([
  'ember'
],
function(Ember) {
  var IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
      this.controllerFor('application').set('title', 'Ember AMD Starter');
    }
  });
  return IndexRoute;
});
