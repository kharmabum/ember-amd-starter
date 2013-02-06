define([
  'ember',
  'hbs!application'
],
function(Ember, appTemplate) {
  var ApplicationView = Ember.View.extend({
    templateName: 'application'
  });
  return ApplicationView;
});
