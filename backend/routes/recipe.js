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

router.get('/', getRecipes); // get all recipies
router.get('/:id', getRecipe);
router.post('/', upload.single('file'), addRecipe);
router.put('/:id', editRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;
