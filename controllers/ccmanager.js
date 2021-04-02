// ==============================================
// DEPENDENCIES
// ==============================================
const express = require("express");
const CREDITCARD = express.Router();
const mongoose = require("mongoose");


// ==============================================
// MODELS
// ==============================================
const Card = require("../models/ccmanagerschema.js")


// ==============================================
// ROUTES
// ==============================================

///////////////  seed route  ///////////////


///////////////  index route ///////////////
CREDITCARD.get("/ccmanager", (req, res)  => {
    console.log("I have hit the /ccmanager index")
    res.send("Ready to start the Credit Card Manager project!");
    // Card.find({}, (error, allCards) => {
    //     res.send(allCards)
    // })

})

///////////////  new route   ///////////////
CREDITCARD.get("/ccmanager/new", (req, res) => {
    res.send("new")
});


/////////////// create route ///////////////
CREDITCARD.post('/', (req, res) => {
    Card.create(req.body, (error, createdCard) => {
    if (error) {
        res.status(400).json({ error: error.message })
    };
    console.log("Testing equipment creation route:", createdCard)
    res.status(200).send(createdCard) 
    });
});

///////////////  show route  ///////////////


///////////////  edit route  ///////////////


/////////////// update route ///////////////


/////////////// delete route ///////////////




/////////////// ITEM CREATION - testing
const myFirstCardEntry = {
    cardName: "Capital One Visa",
    firstNumInAcct: 3,
    lastFourAcctNums: 5555,
    bank: "ING Bank",
    bankPhone: "555-555-5555",
    bankAddress: "123 Main St.",
    creditLimit: 10000,
    balance: 3500,
    dueDate: 2021-04-15,
    minimumPay: 150,
    interest: 18,
    comments: "I want to decrease my balance of this card"
}

Card.create(myFirstCardEntry, (error, cardItem) => {
if (error) {
    console.log(error)
} else {
    console.log(cardItem)
}
})

module.exports = CREDITCARD;
