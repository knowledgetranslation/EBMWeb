// diagnostic test

app.models.DiagnosticTest = Backbone.Model.extend({
  "urlRoot": "http://localhost:3000/diagnosticTest/",
  "defaults": {
    "testPositiveDisease": 0,
    "testPositiveNoDisease": 0,
    "testNegativeDisease": 0,
    "testNegativeNoDisease": 0,
    "sensitivity":0,
    "sensitivityLowerLimit":0,
    "sensitivityUpperLimit":0,
    "specificity":0,
    "specificityLowerLimit":0,
    "specificityUpperLimit":0,
    "ppv":0,
    "ppvLowerLimit":0,
    "ppvUpperLimit":0,
    "npv":0,
    "npvLowerLimit":0,
    "npvUpperLimit":0,
    "lrPlus":0,
    "lrPlusLowerLimit":0,
    "lrPlusUpperLimit":0,
    "lrMinus":0,
    "lrMinusLowerLimit":0,
    "lrMinusUpperLimit":0
  },
  "updateTestValues": function(testValues) {
    this.resetValues();
    this.set(testValues);
    this.save();
  },
  "resetValues": function() {
    this.set({
      "testPositiveDisease": 0,
      "testPositiveNoDisease": 0,
      "testNegativeDisease": 0,
      "testNegativeNoDisease": 0,
      "sensitivity":0,
      "sensitivityLowerLimit":0,
      "sensitivityUpperLimit":0,
      "specificity":0,
      "specificityLowerLimit":0,
      "specificityUpperLimit":0,
      "ppv":0,
      "ppvLowerLimit":0,
      "ppvUpperLimit":0,
      "npv":0,
      "npvLowerLimit":0,
      "npvUpperLimit":0,
      "lrPlus":0,
      "lrPlusLowerLimit":0,
      "lrPlusUpperLimit":0,
      "lrMinus":0,
      "lrMinusLowerLimit":0,
      "lrMinusUpperLimit":0
    });
  },
  "updateLRValues": function(testValues) {
    this.resetValues();
    this.set(testValues);
    this.save();
  }
});