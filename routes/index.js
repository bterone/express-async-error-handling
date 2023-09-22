var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/non-async', function(req, res, next) {
  res.render('index', { title: 'Non async route' });
});

router.get('/non-async-error', function(req, res, next) {
  // Properly resolves by express default error handler
  throw new Error('Non async error');
});

router.get('/async', async function(req, res, next) {
  res.render('index', { title: 'Async route' });
});

router.get('/async-error', async function(req, res, next) {
  // Causes socket hangup. If we remove `process.on('unhandledRejection', ...)` 
  // from app.js, it will cause the server to crash instead.
  throw new Error('Async error');
});

router.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;
