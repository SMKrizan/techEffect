// LIBRARY dependencies
const path = require('path');
const express = require('express');
// this library allows back end connection
const session = require('express-session');
// template engine:
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// LOCAL dependencies
// imports connection to Sequelize from 'connection' file
const sequelize = require('./config/connection');

// stores sessions created by 'express-session' to the db
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// this middleware needs to be placed before 'app.use(express(json())'
app.use(session(sess));

// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// EXPRESS.js MIDDLEWARE (processes called in between processing request and sending response)
// 'express.json()' is required for POST and PUT requests (as GET & DELETE requests do not send data to server this middleware is not required for them); both methods,'express.json()' and 'express.urlencoded()', send data as data objects (enclosed in the body of the (POST or PUT) request) to server and ask server to accept or store that data object; both methods recognize/parse incoming request objects (containing key-value pairs).
// parses req-objects from server as a JSON object
app.use(express.json());
// parses req-objects from server as string/array (when false) or any type (when true)
app.use(express.urlencoded({ extended: true }));
// takes all contents of a folder and delivers them as static assets; helpful for front-end-specific files like images/.css/.js.
app.use(express.static(path.join(__dirname, 'public')));

// imports routes
app.use(require('./controllers'));

// establishes connection to db and server; 'sync' method directs Sequelize to take the models and connect them to associated db tables; if such a table does not exist Sequelize will create it; 'force: boolean' method establishes whether database tables will be dropped and recreated on startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening.'));
});