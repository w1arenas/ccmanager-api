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


// /////////////// CREATE route ///////////////
CREDITCARD.post('/', (req, res) => {
    Card.create(req.body, (error, createdCard) => {
    if (error) {
        res.status(400).json({ error: error.message })
    };
    console.log("Testing card creation route:", createdCard)
    res.status(200).send(createdCard) 
    });

});


// curl -X POST -H "Content-Type: application/json" -d '{"cardName":"Diners Club", "firstNumInAcct":"9", "lastFourAcctNums":"0000", "bank":"Centurion Bank", "bankPhone":"800-888-8888", "bankAddress":"555 Magnolia Ct.", "creditLimit":"100000", "balance":"20000", "dueDate":"2021-04-30", "minimumPay":"2500", "interest":"12", "comments":"None"}' 'http://localhost:3003/ccmanager'

// ///////////////  READ routes ///////////////
// CREDITCARD.get("/:id", (req, res) => {
//     Card.find({"_id": req.params.id}, (err, foundCard) => {
//         if (err) {
//             res.status(400).json({ error: err.message })
//         }
//         res.status(200).json(foundCard)
//     })
// })

CREDITCARD.get("/", (req, res) => {
    Card.find({}, (err, foundCard) => {
        if (err) {
            res.status(400).json({ error: err.message });
        };
        res.status(200).json(foundCard);
    });
});



/////////////// UPDATE route ///////////////
CREDITCARD.put('/:id', (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCard) => {
        if (err) {
        res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedCard)
    })
    })

// curl -X PUT -H "Content-Type: application/json" -d '{"cardName":"VISA"}' http://localhost:3003/ccmanager/606b2bed45fffdf03c52aaa3

/////////////// DELETE route ///////////////
CREDITCARD.delete("/:id", (req, res) => {
    Card.findByIdAndRemove(req.params.id, (err, deletedCard) => {
        if (err) {
            res.status(400).json({ error: err.message});
        };
        res.status(200).json(deletedCard);
    });
});

// curl -X DELETE http://localhost:3003/ccmanager/606c6233e485f9224fc50192


// ///////////////  SEEDING  ///////////////
// CREDITCARD.get("/ccmanager/seed", async (req, res) => {
//     Card.create([
//         {
//             cardName: "Capital One Visa",
//             firstNumInAcct: 3,
//             lastFourAcctNums: 5555,
//             bank: "ING Bank",
//             bankPhone: "555-555-5555",
//             bankAddress: "123 Main St.",
//             creditLimit: 10000,
//             balance: 3500,
//             dueDate: 2021-04-15,
//             minimumPay: 150,
//             interest: 18,
//             comments: "I want to decrease the balance of this card first."
//         },
//         {
//             cardName: "American Express",
//             firstNumInAcct: 5,
//             lastFourAcctNums: 9999,
//             bank: "Centurion Bank",
//             bankPhone: "555-555-5555",
//             bankAddress: "123 Main St.",
//             creditLimit: 20000,
//             balance: 8000,
//             dueDate: 2021-04-18,
//             minimumPay: 300,
//             interest: 14,
//             comments: "I want to decrease the balance of this card second."
//         },
//     ]);
// });


/////////////// ITEM CREATION - testing
// const myFirstCardEntry = [{
//     cardName: "Master Card",
//     firstNumInAcct: 5,
//     lastFourAcctNums: 5432,
//     bank: "Chase Bank",
//     bankPhone: "800-444-5555",
//     bankAddress: "123 Main St.",
//     creditLimit: 10000,
//     balance: 3500,
//     dueDate: 2021-04-15,
//     minimumPay: 110,
//     interest: 18,
//     comments: "This will be the second card to pay off."
// },
// {
//     cardName: "American Express",
//     firstNumInAcct: 3,
//     lastFourAcctNums: 3456,
//     bank: "Centurion Bank",
//     bankPhone: "800-555-2424",
//     bankAddress: "456 Central Ave.",
//     creditLimit: 20000,
//     balance: 8000,
//     dueDate: 2021-04-18,
//     minimumPay: 250,
//     interest: 24,
//     comments: "Try not to use. Interest is too high."
// },
// {
//     cardName: "Discover",
//     firstNumInAcct: 6,
//     lastFourAcctNums: 6543,
//     bank: "Discover Bank",
//     bankPhone: "800-333-8100",
//     bankAddress: "1023 Park Ave.",
//     creditLimit: 8000,
//     balance: 7500,
//     dueDate: 2021-04-22,
//     minimumPay: 190,
//     interest: 18,
//     comments: "Too close to credit limit. DO NOT USE!"
// },
// {
//     cardName: "Visa",
//     firstNumInAcct: 4,
//     lastFourAcctNums: 4567,
//     bank: "Bank of America",
//     bankPhone: "800-900-9000",
//     bankAddress: "789 Wahington Blv.",
//     creditLimit: 2000,
//     balance: 1000,
//     dueDate: 2021-04-30,
//     minimumPay: 30,
//     interest: 14,
//     comments: "I want to decrease the balance of this card first."
// },
// ]

// Card.create(myFirstCardEntry, (error, cardItem) => {
// if (error) {
//     console.log(error)
// } else {
//     console.log(cardItem)
// }
// })


module.exports = CREDITCARD;
