const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {
    passwordsDoNotMatch,
    userAlreadyExists,
    isPasswordLengthValid,
    isMissingField,
    isNameInvalid,
    isEmailInvalid,
    generateJWTToken
} = require('../utils/userContollerUtils')

const loginUser = async (request, response) => {
    response.send('Login User')
}

const signupUser = async (request, response) => {
    try {
        const { name, email, password, passwordConfirmation } = request.body
        if (passwordsDoNotMatch(password, passwordConfirmation)) {
            return response.status(400).json({ error: 'Passwords do not match' })
        }
        if (isPasswordLengthValid(password)) {
            return response.status(400).json({ error: 'Password length must be between 8 and 20' })
        }
        if (await userAlreadyExists(email, User)) {
            return response.status(400).json({ error: 'User already exists' })
        }
        if (isMissingField(request)) {
            return response.status(400).json({ error: 'Missing required fields' })
        }
        if (isEmailInvalid(email)) {
            return response.status(400).json({ error: 'Email is not valid' })
        }
        if (isNameInvalid(name)) {
            return response.status(400).json({ error: 'Name is not valid' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })
        response.status(201).json({
            message: 'success',
            userId: user.user_id,
            name: user.name,
            email: user.email,
            token: generateJWTToken(jwt, user.user_id)
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: 'Something went wrong' })
    }
}

const getUser = async (request, response) => {
    response.send('Navigate User to Dashboard')
}


module.exports = {
    loginUser,
    signupUser,
    getUser
}