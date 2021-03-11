const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');

const {
  signUp,
  signIn,
  signOut,
  getUserData,
} = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', signUp);

router.post('/signin', signIn);

router.get('/signout', signOut);

router.get('/check', authMiddleware, getUserData);

module.exports = router;
