var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

router.get('/', controller.travel);

/*router.get('/', function (req, res, next) {
    res.render('travel', {trips: })
});*/

module.exports = router;