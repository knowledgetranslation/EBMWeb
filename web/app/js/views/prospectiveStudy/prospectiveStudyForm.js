app.views.ProspectiveStudyFormView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/prospectiveStudy/prospectiveStudyForm.us'],

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
    if (model.get("id") === "2") {
      this.el.style.display = 'block';
    }
    else
    {
      this.el.style.display = 'none';
    }
  },

  submit: function (e) {
      e.preventDefault();
      var treatedDisease = this.el.querySelector("input[name=treatedDisease]").value;
      var treatedNoDisease = this.el.querySelector("input[name=treatedNoDisease]").value;
      var notTreatedDisease = this.el.querySelector("input[name=notTreatedDisease]").value;
      var notTreatedNoDisease = this.el.querySelector("input[name=notTreatedNoDisease]").value;
      var testValues = {
        "treatedDisease": parseFloat(treatedDisease),
        "treatedNoDisease": parseFloat(treatedNoDisease),
        "notTreatedDisease": parseFloat(notTreatedDisease),
        "notTreatedNoDisease": parseFloat(notTreatedNoDisease)
      };
      this.model.updateTestValues(testValues);
  },

  render: function() {
    this.el.innerHTML = this.template(this.model.attributes);
  }
});