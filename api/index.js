var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var ebmstats = require('../../ebmStats/index.js')
var app = express()
var PNGImage = require('pngjs-image')
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())

var a, b, c, d;

function setValues (req, res, next) {
  /*
  if (req.method === "POST") {
    a = parseFloat(req.body.a)
    b = parseFloat(req.body.b)
    c = parseFloat(req.body.c)
    d = parseFloat(req.body.d)

    ebmstats.updateValues(a, b, c, d)

    next()
  }
  */
}

app.get('/chart/svg/:lrPlus/:lrMinus', function(req, res) {
  res.set('Content-Type', 'image/svg+xml');
  var fileName = "./template/graph.svg";
  var lrPlus = req.params.lrPlus;
  var lrMinus = req.params.lrMinus;
  fs.exists(fileName, function(exists) {
    if (exists) {
      fs.stat(fileName, function(error, stats) {
        fs.open(fileName, "r", function(error, fd) {
          var buffer = new Buffer(stats.size);

          fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
            var data = buffer.toString("utf8", 0, buffer.length);

            fs.close(fd);

            var canvas = {
              "width":297,
              "height":296
            }
            res.send(plotSVG(data, lrPlus, lrMinus, canvas));
          });
        });
      });
    }
  });
});

app.get('/chart/png/:lrPlus/:lrMinus', function(req, res) {
  var lrPlus = req.params.lrPlus;
  var lrMinus = req.params.lrMinus;

  var xOffset = 70;
  var yOffset = 54;

  var image = PNGImage.readImage('template/blank.png', function () {

    var canvas = {
      "width": 450,
      "height": 448
    };

    var pointsBlue = ebmstats.getCoordinatesOfCurve(lrPlus, canvas);
    var pointsRed = ebmstats.getCoordinatesOfCurve(lrMinus, canvas);

    pointsBlue.splice(0, 0, { "x": 0, "y": 448});
    pointsRed.splice(0, 0, { "x": 0, "y": 448});

    var lastX = xOffset;
    var lastY = yOffset;

    pointsRed.forEach(function(point) {
      var x = xOffset+Math.round(point.x);
      var y = yOffset+Math.round(point.y);
      if (lastY-y > 1) {
        var yChange = lastY-y;
        var xChange = x-lastX;
        var counter = 0;
        while (counter !== lastY-y) {
          drawPNGPixel(image, x, y+counter, { red: 255, green: 0, blue: 0});
          counter++;
        }
      }
      drawPNGPixel(image, x, y, {red: 255, green: 0, blue: 0});
      lastX = x;
      lastY = y;
    });

    var lastX = xOffset;
    var lastY = yOffset;

    pointsBlue.forEach(function(point) {
      var x = Math.round(xOffset+point.x);
      var y = Math.round(yOffset+point.y);
      if (lastY-y > 1) {
        var yChange = lastY-y;
        var xChange = x-lastX;
        var counter = 0;
        while (counter !== lastY-y) {
          drawPNGPixel(image, x, y+counter, { red: 0, green: 0, blue: 255});
          counter++;
        }
      }
      drawPNGPixel(image, x, y, { red: 0, green: 0, blue: 255});
      lastX = x;
      lastY = y;
    });

    image._image.pack().pipe(res);
  });
});

function drawPNGPixel (image, x, y, color) {
  image.setAt(x-2, y-2, color);
  image.setAt(x-1, y-2, color);
  image.setAt(x, y-2, color);
  image.setAt(x+1, y-2, color);
  image.setAt(x+2, y-2, color);

  image.setAt(x-2, y-1, color);
  image.setAt(x-1, y-1, color);
  image.setAt(x, y-1, color);
  image.setAt(x+1, y-1, color);
  image.setAt(x+2, y-1, color);

  image.setAt(x-2, y, color);
  image.setAt(x-1, y, color);
  image.setAt(x, y, color);
  image.setAt(x+1, y, color);
  image.setAt(x+2, y, color);

  image.setAt(x-2, y+1, color);
  image.setAt(x-1, y+1, color);
  image.setAt(x, y+1, color);
  image.setAt(x+1, y+1, color);
  image.setAt(x+2, y+1, color);

  image.setAt(x-2, y+2, color);
  image.setAt(x-1, y+2, color);
  image.setAt(x, y+2, color);
  image.setAt(x+1, y+2, color);
  image.setAt(x+2, y+2, color);
}



function plotSVG(template, lrPlus, lrMinus, canvas) {
  // do something to return a graph, a png for example, maybe a binary string so nothing has to save to memory.

  var lineRed = "M0," + canvas.height; // move cursor to origin
  var lineBlue = "M0," + canvas.height; // move cursor to origin

  var pointsBlue = ebmstats.getCoordinatesOfCurve(lrPlus, canvas);
  var pointsRed = ebmstats.getCoordinatesOfCurve(lrMinus, canvas);

  pointsBlue.forEach(function(point) {
    lineBlue += " L" + point.x + "," + point.y; // draw line to new x,y coordinate
  });

  pointsRed.forEach(function(point) {
    lineRed += " L" + point.x + "," + point.y; // draw line to new x,y coordinate
  });

  if (lrPlus !== "0" && lrMinus !== "0") {
    template = template.split("{{red}}").join(lineRed);
    template = template.split("{{blue}}").join(lineBlue);
  }

  return template;
}





app.post('/rct', function (req, res) {
	res.send(ebmstats.getRct())
})

app.post('/caseControlStudy', function (req, res) {
	res.send(ebmstats.getCaseControlStudy())
})

app.post('/diagnosticTest', function (req, res) {
  var testValues = {
    "testPositiveDisease": parseFloat(req.body.testPositiveDisease),
    "testPositiveNoDisease": parseFloat(req.body.testPositiveNoDisease),
    "testNegativeDisease": parseFloat(req.body.testNegativeDisease),
    "testNegativeNoDisease": parseFloat(req.body.testNegativeNoDisease),
    "lrPlus": parseFloat(req.body.lrPlus),
    "lrMinus": parseFloat(req.body.lrMinus)
  }
  res.send(ebmstats.getDiagnosticTest(testValues))
})

app.post('/prospectiveStudy', function (req, res) {
  var testValues = {
    "treatedDisease": parseFloat(req.body.treatedDisease),
    "treatedNoDisease": parseFloat(req.body.treatedNoDisease),
    "notTreatedDisease": parseFloat(req.body.notTreatedDisease),
    "notTreatedNoDisease": parseFloat(req.body.notTreatedNoDisease)
  }
  res.send(ebmstats.getProspectiveStudy(testValues))
})

var server = app.listen(3000, function() {
	console.log("listening");
})
