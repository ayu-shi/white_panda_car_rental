const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let Car = require('../models/Car');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  console.log(req.body)
  let car = new Car(req.body);
  car.save()
    .then(business => {
      res.status(200).json({'car': 'car in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Car.find(function (err, Cars){
    if(err){
      console.log(err);
    }
    else {
      res.json(Cars);
    }
  });
});

businessRoutes.route('/show_book_status').get(function (req, res) {
  Car.find(function (err, Cars){
  if(err){
    console.log(err);
  }
  else {
    res.json(Cars);
  }
});
});


businessRoutes.route('/book').get(function (req, res) {
  Car.find(function (err, Cars){
  if(err){
    console.log(err);
  }
  else {
    res.json(Cars);
  }
});
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Car.findById(id, function (err, Cars){
    console.log(Cars);
      res.json(Cars);
  });
});


//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
  Car.findById(req.params.id, function(err, business, next) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.vehicle_number = req.body.vehicle_number;
        business.model_name = req.body.model_name;
        business.seating_capacity = req.body.seating_capacity;
        business.rent = req.body.rent

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Car.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

businessRoutes.route('/booked/:id').get(function (req, res) {
  console.log("kk");
  Car.findByIdAndUpdate({_id: req.params.id},{$set: { booked : 'true'}}, {new: true}, function(err, result){
      if(err) res.json(err);
      else {
        res.status(200).json({'car': 'car in added successfully'});
      }
  });
});


module.exports = businessRoutes;