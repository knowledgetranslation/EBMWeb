app.views.CaseControlStudyView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/caseControlStudy/caseControlStudyForm.us'],

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
    if (model.get("id") === "3") {
      this.el.style.display = 'block';
    }
    else
    {
      this.el.style.display = 'none';
    }
  },

  submit: function (e) {
      e.preventDefault();
      var caseExposed = this.el.querySelector("input[name=caseExposed]").value;
      var caseNotExposed = this.el.querySelector("input[name=caseNotExposed]").value;
      var controlExposed = this.el.querySelector("input[name=controlExposed]").value;
      var controlNotExposed = this.el.querySelector("input[name=controlNotExposed]").value;
      var testValues = {
        "caseExposed": parseFloat(caseExposed),
        "caseNotExposed": parseFloat(caseNotExposed),
        "controlExposed": parseFloat(controlExposed),
        "controlNotExposed": parseFloat(controlNotExposed)
      };
      this.model.updateTestValues(testValues);
  },

  render: function() {
    this.el.innerHTML = this.template(this.model.attributes);
  }
});