var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Best Community Service' });
});

/* GET home page. */
router.get('/inHouseServices', function(req, res, next) {
    res.render('inHouseServices', { title: 'In House Services' });
});

/* GET classes page. */
router.get('/inHouseServices/classes', function(req, res, next) {
    res.render('classes', { title: 'Classes' });
});
module.exports = router;
