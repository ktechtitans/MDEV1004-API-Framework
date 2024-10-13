const mongoose = require('mongoose');// Import Mongoose library for MongoDB interaction
const Schema = mongoose.Schema;// Alias for mongoose.Schema

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