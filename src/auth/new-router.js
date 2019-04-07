'use strict';

const express = require('express');
const router = express.Router();

const auth = require('./middleware.js');
const Role = require('./roles-model.js');

router.post('/roles', (req,res,next) => {
  let role = new Role(req.body);
  role.save();
  res.status(200).send('Saved role to MONGODB');
});

router.get('/public-stuff', auth(),(req,res,next) => {
  res.status(200).send(' For Everyone!! :D ');
});

router.get('/hidden-stuff', auth(),(req,res,next) => {
  res.status(200).send('Not for everyone');
});

router.get('/something-to-read', auth(),(req,res,next) => {
  res.status(200).send('Read a dis');
});

router.post('/create-a-thing', auth(),(req,res,next) => {
  res.status(200).send('Create a thing');
});

router.put('/update', auth(),(req,res,next) => {
  res.status(200).send('Update a thing');
});

router.patch('/jp', auth('update'),(req,res,next) => {
  res.status(200).send('Update a things');
});

router.delete('/bye-bye', auth('delete'),(req,res,next) => {
  res.status(200).send('Delete a thing');
});

router.get('/everything', auth(),(req,res,next) => {
  res.status(200).send('Do it all');
});

module.exports = router;
