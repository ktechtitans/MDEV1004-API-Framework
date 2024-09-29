/**
 * File: Route.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 28-09-2024
 */

const express  = require('express');
const router = express.Router();

const {getRecipe, postrecipe } = require('../Controller/Controller');


/**
 * Route: GET /getall
 * Description: Retrieves all recipes from the database.
 * Handler: getRecipe - Defined in the Controller.js file
 */

router.get('/getall', getRecipe);

/**
 * Route: POST /createNew
 * Description: Creates a new recipe and saves it to the database.
 * Handler: postRecipe - Defined in the Controller.js file
 */

router.post('/createNew', postrecipe);

// Export the router to use in the main index.js file
module.exports = router;