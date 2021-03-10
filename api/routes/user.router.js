const express = require('express');
const {
  getUserIntolerances,
} = require('../controllers/user.controller');

const router = express.Router();

router.route('/intolerances')
  .get(getUserIntolerances);

module.exports = router;
