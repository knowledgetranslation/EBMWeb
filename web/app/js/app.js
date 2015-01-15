var sc        = new app.models.StatsCalculator();
var scv       = new app.views.StatsCalculatorView({model: sc});

$("#main").html(scv.el);