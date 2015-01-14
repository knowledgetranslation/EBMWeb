app.views.RandomizedControlTrialResultsView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/randomizedControlTrial/rctResults.us'],

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

  render: function() {
    this.el.innerHTML = this.template(this.model.attributes);
  }
});