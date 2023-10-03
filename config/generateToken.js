const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: "30d" })

    return token
}

module.exports = generateToken;