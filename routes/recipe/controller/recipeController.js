const Recipe = require("../model/Recipe");

module.exports = {
  getAllRecipe: function (callback) {
    Recipe.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  createRecipe: function (body, callback) {
    //Create a mongodb User Object it will assign a unique ID for the user
    let createdRecipe = new Recipe({
      recipeName: body.recipeName,
    });
    createdRecipe.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
};
