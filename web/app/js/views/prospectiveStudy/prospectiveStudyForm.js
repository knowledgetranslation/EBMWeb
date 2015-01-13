app.views.ProspectiveStudyFormView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/prospectiveStudy/prospectiveStudyForm.us'],

  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },

  events: {
    'submit form': 'submit'
  },

  submit: function (e) {
      e.preventDefault();
      var treatedDisease = $(this.$el).find("input[name=treatedDisease]").val();
      var treatedNoDisease = $(this.$el).find("input[name=treatedNoDisease]").val();
      var notTreatedDisease = $(this.$el).find("input[name=notTreatedDisease]").val();
      var notTreatedNoDisease = $(this.$el).find("input[name=notTreatedNoDisease]").val();
      var testValues = {
        "treatedDisease": parseFloat(treatedDisease),
        "treatedNoDisease": parseFloat(treatedNoDisease),
        "notTreatedDisease": parseFloat(notTreatedDisease),
        "notTreatedNoDisease": parseFloat(notTreatedNoDisease)
      };
      this.model.updateTestValues(testValues);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});