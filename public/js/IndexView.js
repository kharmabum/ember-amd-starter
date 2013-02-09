define([
  'ember',
  'hbs!index',
  'hbs!listItem'
],
function(Ember, indexTemplate, listItemTemplate) {
  var IndexView = Ember.View.extend({
    templateName: 'index',
    listView: Ember.CollectionView.extend({
      itemViewClass: Ember.View.extend({
        templateName: 'listItem'
      })
    })
  });
  return IndexView;
});
