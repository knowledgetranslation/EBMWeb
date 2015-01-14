app.views.DiagnosticTestFormView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/diagnosticTest/diagnosticTestForm.us'],

  initialize: function() {
    this.listenTo(Backbone, 'tests:changed', this.show);
    this.listenTo(this.model, 'change', this.render);
    this.render();
    this.el.style.display = 'none';
  },

  events: {
    'submit form': 'submit'
  },

  show: function(model) {
    if (model.get("id") === "1") {
      this.el.style.display = 'block';
    }
    else
    {
      this.el.style.display = 'none';
    }
  },

  submit: function (e) {
      e.preventDefault();
      var testPositiveDisease = this.el.querySelector("input[name=testPositiveDisease]").value;
      var testPositiveNoDisease = this.el.querySelector("input[name=testPositiveNoDisease]").value;
      var testNegativeDisease = this.el.querySelector("input[name=testNegativeDisease]").value;
      var testNegativeNoDisease = this.el.querySelector("input[name=testNegativeNoDisease]").value;
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
    this.el.innerHTML = this.template(this.model.attributes);
  }
});