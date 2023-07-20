var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res) => {
  var country = "Vietnam" //string
  var year = 2023 // integer
  var grade = 7.5 //double
  var pass = true //boolean
  var gender = 'm' //char
  var sports = ["football", "badminton", "swimming", "voleyball", "running"]

  res.render('index.hbs', {
    country: country,
    year: year,
    grade: grade,
    pass: pass,
    gender: gender,
    sports: sports
  })
})

module.exports = router;
