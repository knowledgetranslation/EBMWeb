// diagnostic test

app.models.ProspectiveStudy = Backbone.Model.extend({
  "urlRoot": "http://localhost:3000/prospectiveStudy/",
  "defaults": {
    "treatedDisease":1,
    "treatedNoDisease":2,
    "notTreatedDisease":3,
    "notTreatedNoDisease":4,
    "chiSquared":0,
    "pValue":0,
    "rr":0,
    "rrLowerLimit":0,
    "rrUpperLimit":0,
    "arr":0,
    "arrLowerLimit":0,
    "arrUpperLimit":0,
    "nnt":0,
    "nntLowerLimit":0,
    "nntUpperLimit":0
  },
  "updateTestValues": function(testValues) {
    this.resetValues();
    this.set(testValues);
    this.save();
  },
  "resetValues": function() {
    this.set({
      "treatedDisease":1,
      "treatedNoDisease":2,
      "notTreatedDisease":3,
      "notTreatedNoDisease":4,
      "chiSquared":0,
      "pValue":0,
      "rr":0,
      "rrLowerLimit":0,
      "rrUpperLimit":0,
      "arr":0,
      "arrLowerLimit":0,
      "arrUpperLimit":0,
      "nnt":0,
      "nntLowerLimit":0,
      "nntUpperLimit":0
    });
  }
});