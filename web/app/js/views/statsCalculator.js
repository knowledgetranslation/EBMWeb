app.views.StatsCalculatorView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/statsCalculator.us'],

  events: {
    'change select': 'changeCalculator'
  },

  changeCalculator: function (e) {
    switch ($(this.$el).find("select").val()) {
      case "dt":
        $("#diagnosticTests").show();
        $("#prospectiveStudyTests").hide();
        break;
      case "ps":
        $("#diagnosticTests").hide();
        $("#prospectiveStudyTests").show();
        break;
      default:
        $("#diagnosticTests").hide();
        $("#prospectiveStudyTests").hide();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});