var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//members//
router.get('/pradhumna', (req, res, next)=> {
  res.render('member', {name: 'Pradhumna', age: '20', work: 'am a computer science student' })
})

router.get('/nitendra', (req, res, next)=> {
  res.render('member', {name: 'Nitendradatta', age: '46', work: 'work as a cable network distributor' })
})

router.get('/yogini', (req, res, next)=> {
  res.render('member', {name: 'Yogini', age: '43', work: 'teach social science to 6th grade kids' })
})

module.exports = router;
