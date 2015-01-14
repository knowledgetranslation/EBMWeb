app.views.CaseControlStudyResultsView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/caseControlStudy/caseControlStudyResults.us'],

  initialize: function() {
    this.listenTo(Backbone, 'tests:changed', this.show);
    this.listenTo(this.model, 'change', this.render);
    this.render();
    this.el.style.display = 'none';
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

  render: function() {
    this.el.innerHTML = this.template(this.model.attributes);
  }
});