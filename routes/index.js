var express = require('express');
var router = express.Router();

/* GET okta home page. */
router.get('/oktaIndex', function(req, res, next) {
    res.render('oktaIndex', { title: 'Okta Index Page Test' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Best Community Service', 
                          header: 'Welcome!' });
});

/* GET inHouseServices page. */
router.get('/inHouseServices', function(req, res, next) {
    res.render('inHouseServices', { title: 'Best Community Service' , 
                          header: 'In House Services' });
});

/* GET classes page. */
router.get('/inHouseServices/classes', function(req, res, next) {
    res.render('classes', { title: 'In House Services' , 
                          header: 'Classes Offered' });
});

/* GET classes page. */
router.get('/inHouseServices/classes/spanishLanguage', function(req, res, next) {
    res.render('spanishLanguage', { title: 'Classes Offered' , 
                          header: 'Spanish Language Class' });
});

/* GET classes page. */
router.get('/inHouseServices/classes/artsAndCrafts', function(req, res, next) {
    res.render('artsAndCrafts', { title: 'Classes Offered' , 
                          header: 'Arts and Crafts Class' });
});

/* GET classes page. */
router.get('/inHouseServices/classes/painting', function(req, res, next) {
    res.render('painting', { title: 'Classes Offered' , 
                          header: 'Painting Class' });
});

/* GET eventRentals page. */
router.get('/inHouseServices/eventRentals', function(req, res, next) {
    res.render('eventRentals', { title: 'Best Community Service' , 
                          header: 'Event Rentals' });
});

/* GET eventRentals page. */
router.get('/inHouseServices/eventRentals/equipment', function(req, res, next) {
    res.render('equipment', { title: 'Event Rentals' , 
                          header: 'Equipment Rentals' });
});

/* GET eventRentals page. */
router.get('/inHouseServices/eventRentals/venues', function(req, res, next) {
    res.render('venues', { title: 'Event Rentals' , 
                          header: 'Venues Available for Rent' });
});

/* GET externalServices page. */
router.get('/externalServices', function(req, res, next) {
    res.render('externalServices', { title: 'Best Community Service' , 
                          header: 'External Services' });
});

/* GET externalServices page. */
router.get('/externalServices/homeCare', function(req, res, next) {
    res.render('homeCare', { title: 'External Services' , 
                          header: 'Home Care' });
});

/* GET externalServices page. */
router.get('/externalServices/shuttles', function(req, res, next) {
    res.render('shuttles', { title: 'External Services' , 
                          header: 'Shuttles' });
});

/* GET volunteering page. */
router.get('/volunteering', function(req, res, next) {
    res.render('volunteering', { title: 'Best Community Service' , 
                          header: 'Volunteering' });
});

/* GET volunteering page. */
router.get('/volunteering/currentOpportunities', function(req, res, next) {
    res.render('currentOpportunities', { title: 'Volunteering' , 
                          header: 'Current Opportunities' });
});

/* GET volunteering page. */
router.get('/volunteering/offerAService', function(req, res, next) {
    res.render('offerAService', { title: 'Volunteering' , 
                          header: 'Offer a Service' });
});

/* GET donations page. */
router.get('/donations', function(req, res, next) {
    res.render('donations', { title: 'Best Community Service' , 
                          header: 'Donations' });
});

/* GET donations page. */
router.get('/donations/goodsDropOff', function(req, res, next) {
    res.render('goodsDropOff', { title: 'Donations' , 
                          header: 'Goods Drop-Off' });
});

/* GET donations page. */
router.get('/donations/payPal', function(req, res, next) {
    res.render('payPal', { title: 'Donations' , 
                          header: 'PayPal' });
});

/* POST user login page. */
router.post('/user/login', function(req, res, next) {
    res.render('users', { title: 'Best Community Service' , 
                          header: 'Welcome, Current User!'});
});

module.exports = router;
