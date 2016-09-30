"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Prego' });
});

/* GET Other Stuff page. */
router.get('/demo-page-2', function (req, res, next) {
  res.render('Demo-Page-2', { title: 'Other Stuff' });
});

/* GET Nutrition pages. */
router.get('/nutrition-demo-page-1', function (req, res, next) {
  res.render('Nutrition-Demo-Page-1', { title: 'Nutrition 1' });
});

router.get('/nutrition-demo-page-2', function (req, res, next) {
  res.render('Nutrition-Demo-Page-2', { title: 'Nutrition 2' });
});

router.get('/nutrition-demo-page-3', function (req, res, next) {
  res.render('Nutrition-Demo-Page-3', { title: 'Nutrition 3' });
});

module.exports = router;
