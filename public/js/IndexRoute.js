define([
  'ember'
],
function(Ember) {
  var IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
      controller.set('title', 'Herro');
      controller.set('listItems', Ember.A([{name: 'item1'}, {name: 'item2'}]));
    }
  });
  return IndexRoute;
});
