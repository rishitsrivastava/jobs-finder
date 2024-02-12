const express = require("express");
const userRouter = express();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");


const signupBody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    dateOfBirth: zod.date()
})
userRouter.post("/register", async (req, res) => {
    try{
        const { success } = signupBody.safeParse(req.body);
        const person = await User.findOne({
            email: req.body.email
        })
        if(!success) {
            return res.status(411).json({
                msg: "not success"
            });
        }
        if(person) {
            return res.status(411).json({
                msg: "user already exists"
            });
        }
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastname,
            dateOfBirth: req.body.dateOfBirth
        })
    
        if(!user) {
            return res.status(411).json({
                msg: "an error occurred in creating a user"
            })
        };
        res.status(200).json({
            msg: "user created successfully"
        })
    } catch(error) {
        console.log(error);
    }
})

module.exports = userRouter;