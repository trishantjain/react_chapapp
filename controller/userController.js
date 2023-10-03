const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password, pic } = req.body;

        if (!name || !email || !password) {
            res.status(400)
            throw new Error("Enter all the fields")
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            res.status(400)
            throw new Error("User already exists");
        }

        const user = User.create({
            name,
            email,
            password,
            pic
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error("User not created")
        }
    } catch (error) {
        throw new Error((error));
    }

})

module.exports = { registerUser };