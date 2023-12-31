const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const minionsRouter = express.Router();

minionsRouter.param('minionId',  (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
})

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
  console.log(getAllFromDatabase('minions'))
})

minionsRouter.post('/', (req, res, next) => {
  const minion = addToDatabase('minions', req.body);
  res.status(201).send(minion);
})

minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(req.minion);
})

minionsRouter.put('/:minionId', (req, res, next) => {
  const minion = updateInstanceInDatabase('minions', req.body);
  res.status(200).send(minion);
})

minionsRouter.delete('/:minionId', (req, res, next) => {
  const minion = deleteFromDatabasebyId('minions', req.params.minionId);
  if (minion) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})

module.exports = minionsRouter;
