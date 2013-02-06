define([
  'jquery',
  'ember'
],
function($, Ember) {
  var IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
      controller.set('title', 'Herro');
      //you can replace this simplistic method of data procurement with your own fancy system (e.g. ember-data)
      $.ajax({
        url: '/json/data.json',
        dataType: 'json',
        success: function(data, status, xhr) {
          controller.set('listItems', Ember.A(data));
        }
      });
    }
  });
  return IndexRoute;
});
