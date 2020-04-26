const createError = require("http-errors");
const express = require("express");
const path = require("path");

const router = express.Router();

// Provide very general information about the API.
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Flax RRG's API!",
    apiVersion: 1,
    apiBaseUrl: req.originalUrl
  });
});

// // Configure SwaggerUI
// const apiSpec = YAML.load(path.resolve(__dirname, "spec.yml"));
// router.get("/spec", (req, res, next) => {
//   // Check the user's permission to read the API spec.
//   const permission = req.getPermissionTo.custom(
//     req.user.role,
//     "readAny",
//     "api-spec"
//   );
// 
//   // If permission is denied, throw an error.
//   if (!permission.granted) return next(createError(403));
// 
//   // Return the spec.
//   if (req.accepts("json")) res.json(apiSpec);
//   else if (req.accepts("application/yaml"))
//     res.send(YAML.stringify(apiSpec, 4));
//   else
//     next(
//       createError(501, "API Spec not yet available in the requested format.")
//     );
// });


// Route  '/character' and '/characters'
router.use('/characters?', require('./characters'));

const db = require('../../models/index.js');
router.post('/test', (req, res, next) => {
  console.log(req.body);
  console.log('test invoked');
  const rando = Math.floor(Math.random() * 100);
  console.log(rando);
  
  db.Url.findOrCreate({where: {url: `test #${rando}`, shortUrl: 'test'}})
    .then(([urlbObj, created]) => {
      console.log('in then');
      console.log(urlbObj);
      console.log(created);
    })
    .catch(error => {
      console.log('got an error:');
      console.log(error);
    });
});

// Return a 404 error if no matching API endpoint is found.
router.use((req, res, next) => next(createError(404, `No such API endpoint: ${req.method} ${req.url}`)));

// API-specific error handler
router.use((error, req, res, next) => {
  /**
   * Make sure that error is an error with the necessary HTTP Errors fields.
   * @type {Error}
   */
  error = createError(error);
  console.log(error);

  // Send the error back with the appropriate status.
  // TODO Make this more useful and filter appropriately.
  res.status(error.statusCode).json(error);
});

module.exports = router;
