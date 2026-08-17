const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  upload,
} = require('../controller/recipe');
const verifyToken = require('../middleware/auth');

router.get('/', getRecipes); // get all recipies
router.get('/:id', getRecipe);
router.post('/', upload.single('file'), verifyToken, addRecipe);
router.put('/:id', editRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;
