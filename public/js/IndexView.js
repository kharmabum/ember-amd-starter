define([
  'ember',
  'hbs!template/index'
],
function(Ember, indexTemplate) {
  var IndexView = Ember.View.extend({
    template: indexTemplate
  });
  return IndexView;
});
