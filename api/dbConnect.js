const mongoose = require ('mongoose');
const connectMongo = require ('connect-mongo');
const session = require ('express-session');
const dotenv = require ('dotenv');

dotenv.config();

mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

const MongoStore = connectMongo(session);

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.createConnection(process.env.SESSION_DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }),
});

module.exports = {
  dbConnection,
  sessionStore,
};
