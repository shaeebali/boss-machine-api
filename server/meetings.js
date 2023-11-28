const express = require('express');
const { getAllFromDatabase, deleteAllFromDatabase, addToDatabase } = require('./db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
  console.log(getAllFromDatabase('meetings'));
})

meetingsRouter.post('/', (req, res, next) => {
  const meetings = addToDatabase('meetings', req.body);
  res.status(201).send(meetings);
})

meetingsRouter.delete('/', (req, res, next) => {
  const meetings = deleteAllFromDatabase('meetings');
  if(meetings) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})

module.exports = meetingsRouter;
