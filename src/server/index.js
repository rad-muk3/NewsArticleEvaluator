/**
 * @description Express, Body-Parser and CORS Setup
 * @description dotenv aylienapi
 * @description require to run the server and use Body-parser and CORS
 *
 **/
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
var aylien = require("aylien_textapi");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// set aylien API credentias
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// Start up an instance of app
const app = express()

/**
 * Middleware
 * @description Configure express to use body-parser as middle-ware.
 *
 **/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/**
 * CORS
 * @description Configure CORS for express to use it
 *
 **/
const cors = require('cors');
app.use(cors());

// Webpack outputs to dist folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
  res.sendFile('dist/index.html')
})

/**
 * @description Setup server
 *
 **/

app.listen(8081, function() {
  console.log('Example app listening on port 8081!')
})

/**
 * @description GET route
 *
 * @returns JS object created at the top of server code.
 **/

app.get("/all", (req, res) => {
  res.send(projectData);

});

app.get('/test', function(req, res) {
  res.send(mockAPIResponse);
});



/**
 * Setup empty JS object to act as endpoint for all routes
 *
 */
projectData = {};

/**
 * @description POST route
 * @description post the aylien-data sentiment
 **/
app.post('/sentiment', sendData);


function sendData(req, res) {

  const url = req.body.url

  //aylienApi
  textapi.sentiment({
      url: url,
      mode: 'document'
    },
    function(error, response) {
      if (error) {
        console.log(error)
      } else {
        res.send(response)
      }
    }
  )
}

/**
 * @description POST route
 *
 * @description Add aylientext-data received from client-side to the projectData object
 * @returns data received from client-side POST
 *
 **/
app.post("/add", (req, res) => {

  projectData.text = req.body.text;
  projectData.subjectivity = req.body.subjectivity;
  projectData.polarity = req.body.polarity;
  projectData.polarity_confidence = (req.body.polarity_confidence * 100);

  res.send(projectData);
});
