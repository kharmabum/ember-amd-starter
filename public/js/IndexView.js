define([
  'ember',
  'hbs!template/index',
  'hbs!template/listItem'
],
function(Ember, indexTemplate, listItemTemplate) {
  var IndexView = Ember.View.extend({
    template: indexTemplate,
    listView: Ember.CollectionView.extend({
      contentBinding: 'App.router.indexController',
      itemViewClass: Ember.View.extend({
        template: listItemTemplate
      })
    })
  });
  return IndexView;
});
