/**
 * File: middleware.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 13-10-24
 */
const validateRecipe = (req, res, next) => {
    const {
      recipeName,
      ingredients,
      cookingTime,
      difficulty,
      cuisine,
      description,
      photoLink,
      averageRating,
    } = req.body;
  
    // Check for missing or empty fields
    if (
      !recipeName ||
      !ingredients ||
      !cookingTime ||
      !difficulty ||
      !cuisine ||
      !description ||
      !averageRating
    ) {
      return res
        .status(400)
        .send(
          "Missing any of the required fileds recipeName, ingredients, cookingTime,difficulty, cuisine, description,photoLink,averageRating"
        );
    }
  
    next();
  };