var express  = require('express'),
    path     = require('path'),
    nconf    = require('nconf'),
    router   = express.Router();

var ERRORS = {
  NOT_FOUND: 'Command Not Found',
  UNAUTHORIZED: 'Unauthorized Request'
};

module.exports = router;

/* NCONF SETTINGS */
// Parse environment variables
nconf.env();

/* ROUTE DEFINITIONS */

// route Slack Posts
router.post('/', handleSlackRequest);

// route service Health Check
router.get('/_health', function (req, res) {
  res.send({
    'status': 'ok'
  });
});

/* FUNCTIONS */

function handleSlackRequest (req, res, next) {
  console.log(req);
}

