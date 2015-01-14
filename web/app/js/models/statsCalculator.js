app.models.StatsCalculator = Backbone.Model.extend({
  defaults: {
    "id": 0
  },

  initialize: function() {
    this.on('change:id', function(e) {
      console.log("Changing to: " + this.get("id"));
      Backbone.trigger('tests:changed', this);
    });
  }
});