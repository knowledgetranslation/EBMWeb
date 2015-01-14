// diagnostic test

app.models.CaseControlStudy = Backbone.Model.extend({
  "urlRoot": "http://localhost:3000/caseControlStudy/",
  "defaults": {
    "caseExposed":0,
    "caseNotExposed":0,
    "controlExposed":0,
    "controlNotExposed":0,
    "chiSquared":0,
    "pValue":0,
    "or":0,
    "orLowerLimit":0,
    "orUpperLimit":0
  },
  "updateTestValues": function(testValues) {
    this.resetValues();
    console.log(testValues);
    this.set(testValues);
    this.save();
  },
  "resetValues": function() {
    this.set({
      "caseExposed":0,
      "caseNotExposed":0,
      "controlExposed":0,
      "controlNotExposed":0,
      "chiSquared":0,
      "pValue":0,
      "or":0,
      "orLowerLimit":0,
      "orUpperLimit":0
    });
  }
});