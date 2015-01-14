app.views.DiagnosticTestLRFormView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/diagnosticTest/diagnosticTestLRForm.us'],

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
      var lrPlus = this.el.querySelector("input[name=lrPlus]").value;
      var lrMinus = this.el.querySelector("input[name=lrMinus]").value;
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
    this.el.innerHTML = this.template(this.model.attributes);
  }
});