const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

const ideasRouter = express.Router();

ideasRouter.param('minionId',  (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
})

ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
  console.log(getAllFromDatabase('ideas'));
})

ideasRouter.post('/', (req, res, next) => {
  const idea = addToDatabase('ideas', req.body);
  res.status(201).send(idea);
})

ideasRouter.get('/:ideaId', (req, res, next) => {
  res.send(req.idea);
})

ideasRouter.put('/:ideaId', (req, res, next) => {
  const idea = updateInstanceInDatabase('ideas', req.body);
  res.status(200).send(idea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  const idea = deleteFromDatabasebyId('ideas', req.params.id);
  if (idea) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})

module.exports = ideasRouter;
