app.views.StatsCalculatorView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/statsCalculator.us'],

  events: {
    'change select': 'changeCalculator'
  },

  changeCalculator: function () {
    this.model.set("id", this.el.querySelector("select").value);
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.el.innerHTML = this.template();
  }
});