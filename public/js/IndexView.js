define([
  'ember',
  'hbs!index'
],
function(Ember) {
  var IndexView = Ember.View.extend({
    templateName: 'index'
  });
  return IndexView;
});
