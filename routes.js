var express = require('express');
var router = express.Router();
var Chart = require('./chart.controller');

router.route('/v1/chartdata')
  .get(Chart.getData);

module.exports = router;