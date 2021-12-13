const express = require('express')
// Tell the server where to look to process routes.
const states_api = require('./routes/states')
const path = require('path')

// Create an instance of the Express app.
const app = express()

// Join together the location of the code plus the client directory name plus the dist
//  directory name to make a path or a location on a computer that runs this code.
const vueAppPath = path.join(__dirname, 'client', 'dist')

// So this is saying requests to, the application, if we don't specify a particular path,
//  it will return or serve the files that are in this dist directory.
app.use(express.static(vueAppPath))

// Requests that hit the server will be converted into JSON.
app.use(express.json())

// Requests that hit the server at /api will make the server pass this onto the states.js file.
app.use('/api', states_api)

// Requests which are invalid, aka not found.
app.use(function(req, res, next) {
    res.status(404).send('Not found!')
})

// Requests which are not otherwise classified as being specific are handled here.
// This is mostly for developers.
app.use(function(err, req, res, next) {
    console.log(err)
    res.status(500).send('Server error.')
})

// Create the server and instantiate on port 3000.
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on port', server.address().port)
})
