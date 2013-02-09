define([
  'ember',
  'hbs!nav'
],
function(Ember, navTemplate) {
  var NavView = Ember.View.extend({
    templateName: 'nav'
  });
  return NavView;
});
