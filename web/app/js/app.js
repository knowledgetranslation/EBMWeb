var dt = new app.models.DiagnosticTest();

var dtv = new app.views.DiagnosticTestView({
  model: dt
});

var dtfv = new app.views.DiagnosticTestFormView({
  model: dt
});

var dtlrfv = new app.views.DiagnosticTestLRFormView({
  model: dt
});

var dtrv = new app.views.DiagnosticTestResultsView({
  model: dt
});

var ps = new app.models.ProspectiveStudy();

var psv = new app.views.ProspectiveStudyFormView({model: ps});

var scv = new app.views.StatsCalculatorView();

$("#statsCalculator").html(scv.el);

$("#prospectiveStudy").html(psv.el);

$("#diagnosticTest").html(dtv.el);
$("#diagnosticTestForm").html(dtfv.el);
$("#diagnosticTestLRForm").html(dtlrfv.el);
$("#diagnosticTestResults").html(dtrv.el);