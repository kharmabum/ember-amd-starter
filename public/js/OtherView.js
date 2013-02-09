define([
  'ember',
  'hbs!other'
],
function(Ember, otherTemplate) {
  var OtherView = Ember.View.extend({
    templateName: 'other'
  });
  return OtherView;
});
