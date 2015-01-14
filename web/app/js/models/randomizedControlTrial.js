// diagnostic test

app.models.RandomizedControlTrial = Backbone.Model.extend({
  "urlRoot": "http://localhost:3000/rct/",
  "defaults": {
    "experimentalOutcome":0,
    "experimentalNoOutcome":0,
    "controlOutcome":0,
    "controlNoOutcome":0,
    "chiSquared":0,
    "pValue":0,
    "rrr":0,
    "rrrLowerLimit":0,
    "rrrUpperLimit":0,
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
      "experimentalOutcome":0,
      "experimentalNoOutcome":0,
      "controlOutcome":0,
      "controlNoOutcome":0,
      "chiSquared":0,
      "pValue":0,
      "rrr":0,
      "rrrLowerLimit":0,
      "rrrUpperLimit":0,
      "arr":0,
      "arrLowerLimit":0,
      "arrUpperLimit":0,
      "nnt":0,
      "nntLowerLimit":0,
      "nntUpperLimit":0
    });
  }
});