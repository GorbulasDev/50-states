const express = require('express')
// Use the States database model.
const States = require('../models').States

// Instantiate a router.
const router = express.Router()

// Retrieve all states.
router.get('/states', function(req, res, next) {
    // Find all states and order them by name.
    States.findAll({ order: ['name']}).then(states => {
        return res.json(states)
    })
    .catch(err => next(err))
})

// Retrieve a single state.
router.get('/state/:name', function(req, res, next) {
    // Collect the name value from its req object.
    const stateName = req.params.name
    // Use the findOne method.
    States.findOne({ where: { name: stateName }})
        .then(state => {
            // If we find a state, give us JSON back, otherwise give us an error.
            if (state) {
                return res.json(state)
            } else { // If it isn't a state found in the DB...
                return res.status(404).send('State not found!')
            }
        })
        .catch(err => next(err))
})

// Update a single state.
router.patch('/states/:name', function(req, res, next) {
    const stateName = req.params.name
    const stateVisited = req.body.visitedState

    // Call the database model and update its data.
    States.update({ visitedState: stateVisited }, { where: { name: stateName }})
        .then(rowsUpdated => {
            if (rowsUpdated) {
                return res.send('Updated!')
            } else {
                return res.status(404).send('State not found!')
            }
        })
        .catch(err => next(err))
})

// Allow other files to the data.
module.exports = router
