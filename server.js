// ==============================================
// DEPENDENCIES
// ==============================================
const express = require("express");
const mongoose = require("mongoose");


// ==============================================
// SERVER CONFIGURATION
// ==============================================
const APP = express();
const PORT = 3000;
const DB_NAME = "cards"
const MONGO_URI = "mongodb://localhost:27017/" + DB_NAME;


// ==============================================
// CONTROLLERS
// ==============================================
const ccmanagerController = require("./controllers/ccmanager.js");


// ==============================================
// MIDDLEWARE
// ==============================================
APP.use(ccmanagerController);
APP.use(express.urlencoded({extended: true}));
APP.use(express.json())
APP.use(express.static("public"))


// ==============================================
// CONNECT TO MONGO
// ==============================================
mongoose.connect(MONGO_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// ==============================================
// CONNECTION ERROR/SUCCESS
// ==============================================
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + "is Mongo not running"));
db.on("connected", () => console.log("The connection with Mongo has been established at: " + MONGO_URI));
db.on("disconnected", () => console.log("Mongo disconnected"));


// ==============================================
// LISTENER
// ==============================================
APP.listen(PORT, () => {
    console.log("Listening to CCManager server on PORT: " + PORT);
})














// ==============================================
// MONGO DISCONNECT
// ==============================================
setTimeout(() => { db.close(); }, 5000)