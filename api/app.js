const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');

const { sessionStore } = require('./dbConnect.js');

const userMiddleware = require('./middlewares/user.middleware');

const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');
const productsRouter = require('./routes/products.router');
const recipesRouter = require('./routes/recipes.router');
const apiRouter = require('./routes/api.router');

const app = express();

const corsOptions = {
  // origin: /\.your.domain\.com$/,    // reqexp will match all prefixes
  origin: '*',
  methods: 'GET,HEAD,POST,PATCH,DELETE,OPTIONS',
  credentials: true,                // required to pass
  allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 2,
    },
  }),
);

app.use(userMiddleware);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/products', productsRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/spoonacular', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

module.exports = app;
