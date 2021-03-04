const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');

const { sessionStore } = require('./dbConnect.js');

// const { indexRouter } = require('./routes/index.js');
// const { authRouter } = require("./routes/auth.js");
// const { userRouter } = require("./routes/user.js");
const productsRouter = require("./routes/products.router");
const recipesRouter = require("./routes/recipes.router");
const apiRouter = require("./routes/api.router");

const app = express();

// view engine setup
const _dirname = path.resolve();
app.set('views', path.join(_dirname, 'src', 'views'));
app.set('view engine', 'hbs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(
//   session({
//     name: 'sid',
//     secret: process.env.SESSION_SECRET,
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 1000 * 60 * 60 * 24 * 2,
//     },
//   }),
// );

//app.use(userMiddleware);

//app.use('/', (req,res) => res.send('express'));
// app.use('/auth', authRouter);
// app.use('/user', userRouter);
app.use('/api/products', productsRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/spoonacular', apiRouter);

module.exports = app;
