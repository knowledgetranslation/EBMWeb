app.views.RandomizedControlTrialView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/randomizedControlTrial/rctForm.us'],

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
    if (model.get("id") === "4") {
      this.el.style.display = 'block';
    }
    else
    {
      this.el.style.display = 'none';
    }
  },

  submit: function (e) {
      e.preventDefault();
      var experimentalOutcome = this.el.querySelector("input[name=experimentalOutcome]").value;
      var controlOutcome = this.el.querySelector("input[name=controlOutcome]").value;
      var experimentalNoOutcome = this.el.querySelector("input[name=experimentalNoOutcome]").value;
      var controlNoOutcome = this.el.querySelector("input[name=controlNoOutcome]").value;
      var testValues = {
        "experimentalOutcome": parseFloat(experimentalOutcome),
        "controlOutcome": parseFloat(controlOutcome),
        "experimentalNoOutcome": parseFloat(experimentalNoOutcome),
        "controlNoOutcome": parseFloat(controlNoOutcome)
      };
      this.model.updateTestValues(testValues);
  },

  render: function() {
    this.el.innerHTML = this.template(this.model.attributes);
  }
});