
const recipes = require ('../Models/Recipe');

const getRecipe = async (req, res) => {
    try {
        const RecipeData = await recipes.find();  // Fetch all recipes from MongoDB collection
      
        res.status(200).json(RecipeData);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to recieve recipes', error: error.message }); // If any error occurs, send a 500 response with the error message
    }
}

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
