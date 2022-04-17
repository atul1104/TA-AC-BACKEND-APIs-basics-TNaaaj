var express = require('express');
var router = express.Router();
var Country = require('../models/Country');

/* GET home page. */
router.post('/', function (req, res, next) {
  Country.create(req.body, (err, country) => {
    if (err) return next(err);
    console.log(country);
    res.send('Counrty details is added to the database');
  });
});

router.get('/', (req, res, next) => {
  Country.find({}, (err, country) => {
    if (err) return next(err);
    console.log(country);
    res.status(200).json({ country });
  });
});

module.exports = router;
