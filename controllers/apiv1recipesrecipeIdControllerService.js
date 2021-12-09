'use strict'

module.exports.findRecipeByrecipeId = function findRecipeByrecipeId(req, res, next) {
  var data = {
    recipeId: "Pizza cojonuda",
    description: "Pizza con vegetales famosa del restaurante Luna Rossa",
    ingredients: "Mozzarella fresca, Gorgonzola DOP, spianata picante calabres, setas boletus.",
    complexity: "dificil"
  }
  res.send(data);
};

module.exports.deleteRecipe = function deleteRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteRecipe'
  });
};

module.exports.updateRecipe = function updateRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateRecipe'
  });
};