const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 60*5
    }
});

async function sendverificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            `<h1>Please confirm your OTP</h1>
            <p>Here is your OTP code: ${otp}</p>`
        );
        console.log("Email Send Successfully");
    } catch(error) {
        console.log("Error occurred while sending mail ", error);
        throw error;
    }
}

otpSchema.pre("save", async function(next) {
    console.log("New document saved to the database");
    if(this.isNew) {
        await sendverificationEmail(this.email, this.otp);
    }
    next();
});

module.exports = mongoose.model("OTP", otpSchema)

