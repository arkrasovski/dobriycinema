'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var faker = require('faker');
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
  weeklyevents: getFilmEvents,
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getFilmEvents(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}

  function todayDate() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    var d = new Date(today),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  var date = req.swagger.params.date.value || todayDate();

  // this sends back a JSON response which is a single string
  res.json([
    {
      "id": '' + faker.random.number(),
      "name": faker.commerce.productName(),
      "image": faker.image.imageUrl(),
      "description": faker.lorem.paragraph(),
      "cinemaLocation": faker.address.streetName() + ' ' + faker.random.number({ 'min': 1, 'max': 200 }),
      "cinemaName": '' + faker.company.companyName(),
      "minCost": ' ' + faker.random.number({ 'min': 200, 'max': 400 }),
      "date": date,
    },
    {
      "id": '',
      "name": faker.commerce.productName(),
      "image": faker.image.imageUrl(),
      "description": faker.lorem.paragraph(),
      "cinemaLocation": faker.address.streetName() + ' ' + faker.random.number({ 'min': 1, 'max': 200 }),
      "cinemaName": '' + faker.company.companyName(),
      "minCost": ' ' + faker.random.number({ 'min': 200, 'max': 400 }),
      "date": date,
    },
    {
      "id": '',
      "name": faker.commerce.productName(),
      "image": faker.image.imageUrl(),
      "description": faker.lorem.paragraph(),
      "cinemaLocation": faker.address.streetName() + ' ' + faker.random.number({ 'min': 1, 'max': 200 }),
      "cinemaName": '' + faker.company.companyName(),
      "minCost": ' ' + faker.random.number({ 'min': 200, 'max': 400 }),
      "date": date,
    },
    {
      "id": '',
      "name": faker.commerce.productName(),
      "image": faker.image.imageUrl(),
      "description": faker.lorem.paragraph(),
      "cinemaLocation": faker.address.streetName() + ' ' + faker.random.number({ 'min': 1, 'max': 200 }),
      "cinemaName": '' + faker.company.companyName(),
      "minCost": ' ' + faker.random.number({ 'min': 200, 'max': 400 }),
      "date": date,
    },

  ]);

}

