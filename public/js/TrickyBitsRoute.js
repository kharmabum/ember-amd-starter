define([
  'ember'
],
function(Ember) {
  var TrickyBitsRoute = Ember.Route.extend({
    setupController: function(controller) {
      this.controllerFor('application').set('title', 'Tricky Bits');
    }
  });
  return TrickyBitsRoute;
});
