// /////////////// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// /////////////// APP CONFIGURATION
const APP = express();
const PORT = 3003;
const DBNAME = 'cards';
APP.use(express.json());

const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

APP.use (cors(corsOptions))

// /////////////// CONTROLLER LOGIC
const ccmanagerController = require("./controllers/ccmanager.js")

// /////////////// CONNECT TO MONGO
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to mongoose...');
});

// /////////////// MIDDLEWARE
APP.use("/ccmanager", ccmanagerController)


// /////////////// LISTENER
APP.listen(PORT, () => {
    console.log("Listening to CCManager on PORT: " + PORT)
})