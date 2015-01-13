app.views.DiagnosticTestFormView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/diagnosticTest/diagnosticTestForm.us'],

  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },

  events: {
    'submit form': 'submit'
  },

  submit: function (e) {
      e.preventDefault();
      var testPositiveDisease = $(this.$el).find("input[name=testPositiveDisease]").val();
      var testPositiveNoDisease = $(this.$el).find("input[name=testPositiveNoDisease]").val();
      var testNegativeDisease = $(this.$el).find("input[name=testNegativeDisease]").val();
      var testNegativeNoDisease = $(this.$el).find("input[name=testNegativeNoDisease]").val();
      var testValues = {
        "lrPlus": 0,
        "lrMinus": 0,
        "testPositiveDisease": parseFloat(testPositiveDisease),
        "testPositiveNoDisease": parseFloat(testPositiveNoDisease),
        "testNegativeDisease": parseFloat(testNegativeDisease),
        "testNegativeNoDisease": parseFloat(testNegativeNoDisease)
      };
      this.model.updateTestValues(testValues);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});