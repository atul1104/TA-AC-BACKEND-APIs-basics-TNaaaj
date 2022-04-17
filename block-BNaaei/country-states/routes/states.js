var express = require('express');
var router = express.Router();
var State = require('../models/State');

/* GET home page. */
router.post('/', (req, res, next) => {
  State.create(req.body, (err, createdState) => {
    if (err) return next(err);
    //res.redirect("/States");
    console.log(createdState);
    res.send('State details is added to the database');
  });
});

router.get('/', (req, res, next) => {
  State.find({}, (err, states) => {
    if (err) return next(err);
    res.json(states);
  });
});

module.exports = router;
