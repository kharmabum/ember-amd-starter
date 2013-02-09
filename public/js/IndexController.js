define([
  'ember'
],
function(Ember) {
  var IndexController = Ember.ArrayController.extend({
    content: Ember.A()
  });
  return IndexController;
});
