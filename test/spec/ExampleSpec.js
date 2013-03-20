define([
  'ember',
  'jquery',
  'IndexView',
  'hbs!application'
],
function(Ember, $, IndexView, applicationTemplate) {
  describe("templates", function() {
    it("should be able to fetch and compile templates", function() {
      expect(applicationTemplate).toBeDefined();
      expect(typeof applicationTemplate).toEqual('function');
    });
  });

  var $container = $(document.body).append('<div>');
  var indexView;

  describe("IndexView", function() {
    beforeEach(function() {
      indexView = IndexView.create();
      indexView.appendTo($container);
    });

    afterEach(function() {
      indexView.remove();
      $container.html('');
    });

    it("should successfully render", function() {
      expect($container.find('*').length).toBeGreaterThan(0);
    });
  });
});
