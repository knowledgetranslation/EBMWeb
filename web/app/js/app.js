var sc        = new app.models.StatsCalculator();
var scv       = new app.views.StatsCalculatorView({model: sc});

$("#statsCalculator").html(scv.el);


var dt        = new app.models.DiagnosticTest();

var dtv       = new app.views.DiagnosticTestView({model: dt});
var dtfv      = new app.views.DiagnosticTestFormView({model: dt});
var dtlrfv    = new app.views.DiagnosticTestLRFormView({model: dt});
var dtrv      = new app.views.DiagnosticTestResultsView({model: dt});

$("#diagnosticTest").html(dtv.el);
$("#diagnosticTestForm").html(dtfv.el);
$("#diagnosticTestLRForm").html(dtlrfv.el);
$("#diagnosticTestResults").html(dtrv.el);


var ps        = new app.models.ProspectiveStudy();

var psv       = new app.views.ProspectiveStudyFormView({model: ps});
var psrv      = new app.views.ProspectiveStudyResultsView({model: ps});

$("#prospectiveStudy").html(psv.el);
$("#prospectiveStudyResults").html(psrv.el);


var ccs        = new app.models.CaseControlStudy();

var ccsv       = new app.views.CaseControlStudyView({model: ccs});
var ccsrv      = new app.views.CaseControlStudyResultsView({model: ccs});

$("#caseControlStudy").html(ccsv.el);
$("#caseControlStudyResults").html(ccsrv.el);


var rct        = new app.models.RandomizedControlTrial();

var rctv       = new app.views.RandomizedControlTrialView({model: rct});
var rctrv      = new app.views.RandomizedControlTrialResultsView({model: rct});

$("#rctStudy").html(rctv.el);
$("#rctStudyResults").html(rctrv.el);