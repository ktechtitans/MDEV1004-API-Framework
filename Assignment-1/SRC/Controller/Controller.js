/**
 * File: Controller.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 28-09-2024
 */

const recipes = require ('../Models/Recipe');

/**
 * Function: getRecipe
 * Description: Fetches all recipes from the MongoDB collection and returns them in JSON format.
 * Parameters: 
 *   - req (Object): The HTTP request object.
 *   - res (Object): The HTTP response object.
 * Returns:
 *   - JSON: A list of all recipes or an error message if something goes wrong.
 */


const getRecipe = async (req, res) => {
    try {
        const RecipeData = await recipes.find();  // Fetch all recipes from MongoDB collection
      
        res.status(200).json(RecipeData);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to recieve recipes', error: error.message }); // If any error occurs, send a 500 response with the error message
    }
}

/**
 * Function: postRecipe
 * Description: Adds a new recipe to the MongoDB collection.
 * Parameters: 
 *   - req (Object): The HTTP request object containing the recipe data in the body.
 *   - res (Object): The HTTP response object.
 * Returns:
 *   - JSON: The saved recipe data or an error message if the operation fails.
 */


const postrecipe = async (req, res) => {
    const { recipeName, ingredients, cookingTime, difficulty, cuisine, description, photoLink, averageRating } = req.body;
    const newRecipe = new recipes({      // Create a new Recipe instance using the request body data
        recipeName,
        ingredients,
        cookingTime,
        difficulty,
        cuisine,
        description,
        photoLink,
        averageRating
    });

    try {
        const savedData  = await newRecipe.save();
        res.status(201).json(savedData)   // Return the saved recipe data in JSON format with a 201 status code (created successfully)
    }
    catch (error){
        res.status(400).json({ message: 'Request Unsuccessfull', error: error.message });
    }
}

// Export the controller functions for use in the routes
module.exports = {getRecipe, postrecipe};