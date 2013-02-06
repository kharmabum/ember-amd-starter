define([
  'ember',
  'Route'
],
function(Ember, Route) {
  var OtherRoute = Route.extend({
    setupController: function(controller) {
      controller.set('title', 'Other Page');
    }
  });
  return OtherRoute;
});
