const mongoose = require("mongoose");
const { mongodbURL } = require('/url')

mongoose.connect(mongodbURL)
    .then(() => console.log("connected to mongodb url"))
    .catch((error) => console.log("error occurred in connection to mongoDB"));


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}