const Recipe = require ('../Models/Recipe');


const Recipe = async (req, res) => {
    try {
        const Recipe = await Recipe.find();
      
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to recieve recipes', error: error.message });
    }
}
