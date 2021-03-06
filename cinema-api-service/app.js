'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/map"]) {
    console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/map");
  }
  console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/weekly');
  if (swaggerExpress.runner.swagger.paths["/user"]) {
    console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/user");
  }
  if (swaggerExpress.runner.swagger.paths["/ratefilm"]) {
    console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/ratefilm");
  }
  if (swaggerExpress.runner.swagger.paths["/recommendations"]) {
    console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/recommendations");
  }
});
