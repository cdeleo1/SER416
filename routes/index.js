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

/* GET classes page. */
router.get('/inHouseServices/classes/spanishLanguage', function(req, res, next) {
    res.render('spanishLanguage', { title: 'Class: Spanish Language' });
});

/* GET classes page. */
router.get('/inHouseServices/classes/artsAndCrafts', function(req, res, next) {
    res.render('artsAndCrafts', { title: 'Class: Arts and Crafts' });
});

/* GET classes page. */
router.get('/inHouseServices/classes/painting', function(req, res, next) {
    res.render('painting', { title: 'Class: Painting' });
});

/* GET eventRentals page. */
router.get('/inHouseServices/eventRentals', function(req, res, next) {
    res.render('eventRentals', { title: 'Event Rentals' });
});

/* GET eventRentals page. */
router.get('/inHouseServices/eventRentals/equipment', function(req, res, next) {
    res.render('equipment', { title: 'Event Rentals: Equipment' });
});

/* GET eventRentals page. */
router.get('/inHouseServices/eventRentals/venues', function(req, res, next) {
    res.render('venues', { title: 'Event Rentals: Venues' });
});

/* GET externalServices page. */
router.get('/externalServices', function(req, res, next) {
    res.render('externalServices', { title: 'External Services' });
});

/* GET externalServices page. */
router.get('/externalServices/homeCare', function(req, res, next) {
    res.render('homeCare', { title: 'External Services: Home Care' });
});

/* GET externalServices page. */
router.get('/externalServices/shuttles', function(req, res, next) {
    res.render('shuttles', { title: 'External Services: Shuttles' });
});

/* GET volunteering page. */
router.get('/volunteering', function(req, res, next) {
    res.render('volunteering', { title: 'Volunteering' });
});

/* GET volunteering page. */
router.get('/volunteering/currentOpportunities', function(req, res, next) {
    res.render('currentOpportunities', { title: 'Volunteering: Current Opportunities' });
});

/* GET volunteering page. */
router.get('/volunteering/offerAService', function(req, res, next) {
    res.render('offerAService', { title: 'Volunteering: Offer a Service' });
});

/* GET donations page. */
router.get('/donations', function(req, res, next) {
    res.render('donations', { title: 'Donations' });
});

/* GET donations page. */
router.get('/donations/goodsDropOff', function(req, res, next) {
    res.render('goodsDropOff', { title: 'Donations: Goods Drop-Off' });
});

/* GET donations page. */
router.get('/donations/payPal', function(req, res, next) {
    res.render('payPal', { title: 'Donations: PayPal' });
});

module.exports = router;
