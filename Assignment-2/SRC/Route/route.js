const express  = require('express');
const router = express.Router();

const {getRecipe, postrecipe, deleteRecipe, updateRecipe, getRecipeonId} = require('../Controller/Controller');

router.get('/getall', getRecipe);

router.post('/createNew', postrecipe);

router.put('/:id',updateRecipe)
router.delete('/:id', deleteRecipe)
router.get('/:id', getRecipeonId)

module.exports = router;