const express = require('express');
const {
  getUserIntolerances,
  setUserIntolerances,
  getUserAisles,
  setUserAisles,
} = require('../controllers/user.controller');

const router = express.Router();

router.route('/intolerances')
  .get(getUserIntolerances)
  .post(setUserIntolerances);

router.route('/aisles')
  .get(getUserAisles)
  .post(setUserAisles);

module.exports = router;
