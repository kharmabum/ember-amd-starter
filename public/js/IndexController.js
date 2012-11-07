define([
  'ember',
  'LoadData'
],
function(Ember, LoadData) {
  var IndexController = Ember.ArrayController.extend(LoadData, {
    dataUrl: '/json/data.json',
    dataKey: 'data'
  });
  return IndexController;
});
