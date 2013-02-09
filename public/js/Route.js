define([
  'ember'
],
function(Ember) {
  var Route = Ember.Route.extend({
    renderTemplate: function() {
      this.render();
      this.render('nav', {
        view: 'nav',
        into: 'application',
        outlet: 'nav'
      });
    }
  });
  return Route;
});
