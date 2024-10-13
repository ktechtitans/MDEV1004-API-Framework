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
