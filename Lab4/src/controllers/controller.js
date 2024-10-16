const Movie = require('../models/Movies');
const fs =require('fs');

//Function to get all movies with search and filter 

exports.getMovies = async (req, res) => {
    try {

        let searchparam = {};

        if (req.query.title) {

            searchparam.title = new RegExp(req.query.title, 'i');
        }
        if (req.query.genre) {

            searchparam.genres = req.query.genre;
        }
        if (req.query.year) {

            searchparam.year = Number(req.query.year);
        }

        const movies = await Movie.find(searchparam);

        res.status(200).send(movies);
         } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send({ message: 'Error retrieving movies' });

    }
};


//Function to create a new movie
exports.createMovie = async(req,res)=>{
    try{
        const newMovie = new Movie(req.body);
        await newMovie.save();
         res.status(201).json(newMovie);
    }
    catch(e){
            console.error(e);
            res.status(500).send('Error creating Movies');
    }
};


//Get a single movie by Id
exports.getMovieById = async(req,res) =>{
try{
    const movie = await Movie.findById(req.params.id);
    if(!movie){
        return res.status(404).send('Movie is not found');
    }
    res.status(201).json(movie);

}
catch(e){
    console.error(e);
    res.status(500).send('Error retrieving the Movies');
}
};


//update Movie

//Get a single movie by Id
exports.updateMovie = async(req,res) =>{
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedMovie){
            return res.status(404).send('Movie is not updated');
        }
        res.status(201).json(updatedMovie);
    
    }
    catch(e){
        console.error(e);
        res.status(500).send('Error uodating the Movies');
    }
    };


    //Delete a single movie by Id
exports.deleteMovie = async(req,res) =>{
    try{
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if(!deletedMovie){
            return res.status(404).send('Movie not found');
        }
        res.status(201).json(deletedMovie);
    
    }
    catch(e){
        console.error(e);
        res.status(500).send('Error deleting the Movies');
    }
    };

    // Function to import movies (moved from index.js)
exports.importMovies = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./movies.json', 'utf-8')); // Read data from movies.json
        const count = await Movie.countDocuments();
        if (count === 0) {
            await Movie.create(data); // Create movies in the database
            console.log('Data successfully imported to MongoDb');
            res.status(200).send('Data successfully imported');
        } else {
            res.status(200).send('Data already exists, skipping import');
        }
    } catch (e) {
        console.error('Error importing data', e);
        res.status(500).send('Error importing data');
    }
};
