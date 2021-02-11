const express = require('express');
const fetch = require('node-fetch');
const apiMocker = require('connect-api-mocker');

// const {
//
// } = require('../controllers/api.controller');

const router = express.Router();

router.use(apiMocker('/', 'api/mocks/api'));

/*router.route('/recipes/complexSearch')
  .get(async (req, res) => {
    const apiUrl = 'https://api.spoonacular.com' + req.originalUrl.slice(4)
      + `&apiKey=${process.env.API_KEY}`
      + '&fillIngredients=true'
      + '&addRecipeInformation=true'
      + '&offset=0'
      + '&number=10';

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      res.json(result);
    } catch (err) {
      console.error(err.message);
      res.sendStatus(401);
    }
  });*/

module.exports = router;
