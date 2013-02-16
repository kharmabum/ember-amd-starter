define([
  'ember',
  'hbs!application'
],
function(Ember) {
  var ApplicationView = Ember.View.extend({
    templateName: 'application'
  });
  return ApplicationView;
});
