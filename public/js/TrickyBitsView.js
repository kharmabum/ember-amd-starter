define([
  'ember',
  'hbs!tricky_bits'
],
function(Ember) {
  var OtherView = Ember.View.extend({
    templateName: 'tricky_bits'
  });
  return OtherView;
});
