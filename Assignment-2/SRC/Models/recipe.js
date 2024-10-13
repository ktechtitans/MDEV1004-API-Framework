const mongoose = require('mongoose');// Import Mongoose library for MongoDB interaction
const Schema = mongoose.Schema;// Alias for mongoose.Schema

/**
 * Recipe Schema: Defines the structure of the recipe documents in the MongoDB collection.
 */
const RecipeSchema = new mongoose.Schema({
    recipeName: { type: String, required: true },
    ingredients: { type: [String], required: true }, 
    cookingTime: { type: Number, required: true },       
    difficulty: { type: String },        
    cuisine: { type: String, required: true },           
    description: { type: String, required: true },       
    photoLink: { type: String, required: true },          
    averageRating: { type: Number, required: true }   
});

const Recipe =mongoose.model("Recipe",RecipeSchema); // Create and export the Recipe model
module.exports = Recipe; // Export the Recipe model for use in other parts of the application
