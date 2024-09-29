const express  = require('express');
const router = express.Router();

const {getRecipe, postrecipe } = require('../Controller/Controller');

router.get('/getall', getRecipe);

router.post('/createNew', postrecipe);


module.exports = router;