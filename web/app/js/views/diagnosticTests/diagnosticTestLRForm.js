app.views.DiagnosticTestLRFormView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/diagnosticTest/diagnosticTestLRForm.us'],

  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },

  events: {
    'submit form': 'submit'
  },

  submit: function (e) {
      e.preventDefault();
      var lrPlus = $(this.$el).find("input[name=lrPlus]").val();
      var lrMinus = $(this.$el).find("input[name=lrMinus]").val();
      var testValues = {
        "lrPlus": parseFloat(lrPlus),
        "lrMinus": parseFloat(lrMinus),
        "testPositiveDisease": 0,
        "testPositiveNoDisease": 0,
        "testNegativeDisease": 0,
        "testNegativeNoDisease": 0
      };
      this.model.updateTestValues(testValues);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});