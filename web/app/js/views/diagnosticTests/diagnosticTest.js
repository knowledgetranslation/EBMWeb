app.views.DiagnosticTestView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/diagnosticTest/diagnosticTest.us'],

  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});