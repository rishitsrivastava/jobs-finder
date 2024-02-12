const mongoose = require("mongoose");
const { mongodbURL } = require('/url')
const User = require("./models/userModel")

try {
    mongoose.connect(mongodbURL)
} catch(error) {
    console.log(error);
}
    

