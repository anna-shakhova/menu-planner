const express = require('express');
const session = require('express-session');
const path = require('path');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const { sessionStore } = require('./dbConnect.js');
const errorMiddleware = require('./middlewares/error.js');
const notFoundMiddleware = require('./middlewares/notfound404.js');
const userMiddleware = require('./middlewares/user.js');

// const { indexRouter } = require('./routes/index.js');
// const { authRouter } = require("./routes/auth.js");
// const { userRouter } = require("./routes/user.js");
const productRouter = require("./routes/product.router");

const app = express();

// view engine setup
const _dirname = path.resolve();
app.set('views', path.join(_dirname, 'src', 'views'));
app.set('view engine', 'hbs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(_dirname, 'public')));

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
app.use(apiMocker('/api', 'api/mocks/api'))

//app.use('/', (req,res) => res.send('express'));
// app.use('/auth', authRouter);
// app.use('/user', userRouter);
app.use('/product', productRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
