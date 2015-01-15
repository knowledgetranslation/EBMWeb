app.views.StatsCalculatorView = Backbone.View.extend({
  tagName: 'div',

  template: JST['app/templates/statsCalculator.us'],

  events: {
    'change select': 'changeCalculator'
  },

  changeCalculator: function () {
    this.model.set("id", this.el.querySelector("select").value);
  },

  initialize: function() {
    this.subviews = {};
    this.render();

    var dt        = new app.models.DiagnosticTest();
    var ps        = new app.models.ProspectiveStudy();
    var ccs        = new app.models.CaseControlStudy();
    var rct        = new app.models.RandomizedControlTrial();

    this.subviews.dtv       = new app.views.DiagnosticTestView({model: dt, el: this.$("#diagnosticTest")});
    this.subviews.dtfv      = new app.views.DiagnosticTestFormView({model: dt, el: this.$("#diagnosticTestForm")});
    this.subviews.dtlrfv    = new app.views.DiagnosticTestLRFormView({model: dt, el: this.$("#diagnosticTestLRForm")});
    this.subviews.dtrv      = new app.views.DiagnosticTestResultsView({model: dt, el: this.$("#diagnosticTestResults")});

    this.subviews.psv       = new app.views.ProspectiveStudyFormView({model: ps, el: this.$("#prospectiveStudy")});
    this.subviews.psrv      = new app.views.ProspectiveStudyResultsView({model: ps, el: this.$("#prospectiveStudyResults")});

    this.subviews.csv       = new app.views.CaseControlStudyView({model: ccs, el: this.$("#caseControlStudy")});
    this.subviews.ccsrv      = new app.views.CaseControlStudyResultsView({model: ccs, el: this.$("#caseControlStudyResults")});

    this.subviews.rctv       = new app.views.RandomizedControlTrialView({model: rct, el: this.$("#rctStudy")});
    this.subviews.rctrv      = new app.views.RandomizedControlTrialResultsView({model: rct, el: this.$("#rctStudyResults")});
  },

  render: function() {
    this.$el.html(this.template());
  }
});