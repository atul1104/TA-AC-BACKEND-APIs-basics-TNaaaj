var express = require('express');
var router = express.Router();
var Book = require('../models/Book');

//Get book listings
router.get('/', (req, res, next) => {
  Book.find({}, (err, books) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      res.status(200).json({ books });
    }
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      res.status(200).json({ book });
    }
  });
});

router.post('/', (req, res, next) => {
  Book.create(req.body, (err, book) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      res.status(200).json({ book });
    }
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id, (err, book) => {
    if (err) {
      res.status.status(500);
      return next(err);
    } else {
      res.status(200).json({ book });
    }
  });
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  //update book db.findandupdatebyid(id)
  Book.findByIdAndUpdate(id, req.body, (err, book) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    res.status(200).json({ book });
  });
});

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  //delete book db.findbyidanddelete(id)
  Book.findByIdAndDelete(id, (err, book) => {
    if (err) {
      res.status(500);
      return next(err);
    }
  });
  res.status(200).json({ book });
});

module.exports = router;
