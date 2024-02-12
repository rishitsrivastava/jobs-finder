const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    verified: {
        type: Boolean
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;