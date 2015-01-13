app.views.DiagnosticTestResultsView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/diagnosticTest/diagnosticTestResults.us'],

  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});