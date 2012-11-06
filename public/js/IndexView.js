define([
  'ember',
  'LoadData',
  'hbs!template/index',
  'hbs!template/listItem'
],
function(Ember, LoadData, indexTemplate, listItemTemplate) {
  var IndexView = Ember.View.extend({
    template: indexTemplate,
    listView: Ember.CollectionView.extend(LoadData, {
      dataUrl: '/json/data.json',
      dataKey: 'data',
      itemViewClass: Ember.View.extend({
        template: listItemTemplate
      })
    })
  });
  return IndexView;
});
