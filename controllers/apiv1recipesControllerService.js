'use strict'

module.exports.getRecipes = function getRecipes(req, res, next) {
  var data = [{
    recipeId: "Pizza cojonuda",
    description: "Pizza con vegetales famosa del restaurante Luna Rossa",
    ingredients: "Mozzarella fresca, Gorgonzola DOP, spianata picante calabres, setas boletus.",
    complexity: "dificil"
  }]
  res.send(data);
};

module.exports.addRecipe = function addRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for addRecipe'
  });
};