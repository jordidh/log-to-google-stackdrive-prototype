var express = require('express');
var router = express.Router();
// Imports the Google Cloud client library
const {Logging} = require('@google-cloud/logging');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
    console.log(req.body.projectId);
    console.log(req.body.logName);
    console.log(req.body.message);

    // Creates a client
    const logging = new Logging({
        projectId: req.body.projectId,
    });
    // Selects the log to write to
    const log = logging.log(req.body.logName);

    // The data to write to the log
    const text = req.body.message;
    // The metadata associated with the entry
    const metadata = {resource: {type: 'global'}};
    // Prepares a log entry
    const entry = log.entry(metadata, text);

    // Writes the log entry
    log
        .write(entry)
        .then(() => {
            console.log(`Logged: ${text}`);
            res.render('index', { title: 'Log added successfully' });
        })
        .catch(err => {
            console.error('ERROR:', err);
            res.render('error', { message: err.message, error: err });
        });
});

module.exports = router;
