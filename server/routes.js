const db = require('../database/index.js');
const url = require('url');
const path = require('path');
const bodyParser = require ('body-parser');


exports.getSignUp = (req, res) => {
  db.getSignUp()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


exports.getLogIn = (req, res) => {
  db.getLogIn()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}



exports.getVetProfiles = (req, res) => {
  db.getVetProfile()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


exports.getPetProfiles = (req, res) => {
  db.getPetProfile()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


exports.postVetProfiles(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phoneNumber = req.body.phoneNumber;
  var address = req.body.address;
  db.postVetProfiles(firstName, lastName, phoneNumber, address)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}
// /firstName, lastName, phoneNumber, address
