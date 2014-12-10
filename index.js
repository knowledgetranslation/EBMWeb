var express = require('express')
var bodyParser = require('body-parser')
var ebmstats = require('ebmstats')
var app = express()

app.use(bodyParser.json())

var a, b, c, d;

function setValues (req, res, next) {
  if (req.method === "POST") {
    a = parseFloat(req.body.a)
    b = parseFloat(req.body.b)
    c = parseFloat(req.body.c)
    d = parseFloat(req.body.d)

    ebmstats.updateValues(a, b, c, d)

    next()
  }
}

app.use(setValues)

app.post('/rct', function (req, res) {
	res.send(ebmstats.getRct())
})

app.post('/caseControlStudy', function (req, res) {
	res.send(ebmstats.getCaseControlStudy())
})

app.post('/diagnosticTest', function (req, res) {
  res.send(ebmstats.getDiagnosticTest())
})

app.post('/prospectiveStudy', function (req, res) {
  res.send(ebmstats.getProspectiveStudy())
})

var server = app.listen(3000, function() {
	console.log("listening");
})
