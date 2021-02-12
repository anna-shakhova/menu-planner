const express = require('express');
const apiMocker = require('connect-api-mocker');

const {
  complexSearch,
  convertAmounts,
} = require('../controllers/api.controller');

const router = express.Router();

router.use(apiMocker('/', 'api/mocks/api'));

//router.get('/recipes/complexSearch', complexSearch);

module.exports = router;
