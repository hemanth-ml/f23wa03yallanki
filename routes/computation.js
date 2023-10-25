var express = require('express');

var router = express.Router();

 

router.get('/', function(req, res, next) {

 if(req.query.x==undefined) {

    value = Math.random();

 }

 else {

    value = req.query.x;

 }

 var result = Math.cbrt(value);

  res.render('computation', { cal: `Math.cbrt(${value}) is ${result}` });

});

 

module.exports = router;