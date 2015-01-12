# EBMWeb

Uses the ebmstats node module on both the client (via Browserify) and the server (via Express) to perform EBM calculations. Will eventually replace the Stats Calculator and OR to NNT Converter found on the Centre for [Evidence-Based Medicine Toronto](http://ktclearinghouse.ca/cebm/toolbox/) website.

## How to run

Running the command below will launch the server on port 3000 of localhost (0.0.0.0 if using curl).

```
node .
```

## REST Requests

Sending a JSON payload consisting of the a, b, c, and d values required by the statistical calculator via POST requests will return JSON results.

### JSON Payload

```
{
  "a":1,
  "b":2,
  "c":3,
  "d":4
}

```

### Endpoints

#### Diagnostic Test

```
http://localhost:3000/diagnosticTest

{
  "graph":true,
  "sensitivity":0.25,
  "sensitivityLowerLimit":0.046,
  "sensitivityUpperLimit":0.699,
  "specificity":0,
  "specificityLowerLimit":0.3,
  "specificityUpperLimit":0.903,
  "ppv":0.333,
  "ppvLowerLimit":0.061,
  "ppvUpperLimit":0.792,
  "npv":0.571,
  "npvLowerLimit":0.25,
  "npvUpperLimit":0.842,
  "lrPlus":0.75,
  "lrPlusLowerLimit":0.098,
  "lrPlusUpperLimit":5.768,
  "lrMinus":1.125,
  "lrMinusLowerLimit":0.505,
  "lrMinusUpperLimit":2.504
}
```

To view the associated probability graph with lrPlus of 1000 and lrMinus of 0.001, access the following routes:

- http://localhost:3000/chart/svg/1000/0.001
- http://localhost:3000/chart/png/1000/0.001

#### Prospective Study

```
http://localhost:3000/prospectiveStudy

{
  "chiSquared":0.179,
  "pValue":0.673,
  "rr":0.778,
  "rrLowerLimit":0.127,
  "rrUpperLimit":4.774,
  "arr":0.095,
  "arrLowerLimit":-0.437,
  "arrUpperLimit":0.516,
  "nnt":10,
  "nntLowerLimit":-2.3,
  "nntUpperLimit":1.9
}
```

#### Randomized Control Trial

```
http://localhost:3000/rct

{
  "chiSquared":0.179,
  "pValue":0.673,
  "rrr":0.222,
  "rrrLowerLimit":-3.774,
  "rrrUpperLimit":0.873,
  "arr":0.095,
  "arrLowerLimit":-0.437,
  "arrUpperLimit":0.516,
  "nnt":10,
  "nntLowerLimit":-2.3,
  "nntUpperLimit":1.9
}
```

#### Case Control Study

```
http://localhost:3000/caseControlStudy

{
  "chiSquared":0.179,
  "pValue":0.673,
  "or":0.667,
  "orLowerLimit":0.039,
  "orUpperLimit":11.285
}
```


