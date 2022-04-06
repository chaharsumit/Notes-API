var express = require('express');
const app = require('../app');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: "API connected successfully" });
})


module.exports = router;