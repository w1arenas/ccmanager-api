// /////////////// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// /////////////// APP CONFIGURATION
const APP = express();
const PORT = 3003;
const DBNAME = 'cards';
APP.use(express.json());

// const whitelist = ["http://localhost:3000", "https://limitless-brushlands-14241.herokuapp.com",]

const corsOptions = {
    origin: ['http://localhost:3000', "https://limitless-brushlands-14241.herokuapp.com"],
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    headers: 'Content-Type,Origin,X-Requested-With,Accept,Authorization',
    credentials: true
}

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

APP.use (cors(corsOptions))

// /////////////// CONTROLLER LOGIC
const ccmanagerController = require("./controllers/ccmanager.js")

// /////////////// CONNECT TO MONGO
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${DBNAME}`
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to mongoose...');
});

// /////////////// MIDDLEWARE
APP.use("/ccmanager", ccmanagerController)


// /////////////// LISTENER
APP.listen(PORT, () => {
    console.log("Listening to CCManager on PORT: " + PORT)
})