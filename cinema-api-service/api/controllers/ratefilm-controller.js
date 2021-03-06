"use strict";
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require("util");
var faker = require("faker");
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  ratefilm: getRateFilm,
};

let genres = [
  "Action",
  "Adventure",
  "Animated",
  "Comedy",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Science fiction",
  "Thriller",
  "Western",
];

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getRateFilm(req, res) {
  // this sends back a JSON response which is a single string
  res.json([
    {
      name: "" + faker.lorem.words(2),
      image: "images/" + faker.random.number({ min: 1, max: 20 }) + ".png",
      date: "" + faker.random.number({ min: 1920, max: 2021 }),
      genre: "" + genres[faker.random.number({ min: 0, max: 10 })],
      plot: "" + faker.lorem.sentences(3),
      country: "" + faker.address.country(),
      rating: "" + faker.random.number({ min: 35, max: 100 }) + "%",
    },
  ]);
}
