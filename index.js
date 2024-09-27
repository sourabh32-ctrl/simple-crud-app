const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

const productRoute = require("./routes/product.route.js");

app.use(express.json());

app.use("/api/products", productRoute);



app.get('/', (req, res) => {
    res.send("hello from node apis server bhai bol na ");
});



mongoose.connect("mongodb+srv://sourabh:R9L9WupABUM9g0BV@backenddb.1fese.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then( () => {
    console.log("connected to db");
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    })
})
.catch( (err) => {
    console.log("connection failed", err);
});