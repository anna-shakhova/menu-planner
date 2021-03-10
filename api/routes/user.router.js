const express = require('express');
const {
  getUserIntolerances,
  setUserIntolerances,
} = require('../controllers/user.controller');

const router = express.Router();

router.route('/intolerances')
  .get(getUserIntolerances)
  .post(setUserIntolerances);

module.exports = router;
