const REGEX_PATTERNS = {
    name: /^([a-zA-Z]{3,40})\s([a-zA-Z]){3,40}$/,
    email: /^[a-z\d\.]+@([a-z\-]+\.)+[a-z\-]{2,6}/
}

const userAlreadyExists = async (email, User) => {
    return await User.findByEmail(email)
}
const isPasswordLengthValid = (password) => {
    return password.length < 8 || password.length > 20
}
const passwordsDoNotMatch = (password, passwordConfirmation) => {
    return password !== passwordConfirmation
}
const isMissingField = (request) => {
    const { name, email, password, passwordConfirmation } = request.body
    return name === '' || email === '' || password === '' || passwordConfirmation === ''
}
const isNameInvalid = (name) => {
    return REGEX_PATTERNS.name.test(name) === false
}
const isEmailInvalid = (email) => {
    return REGEX_PATTERNS.email.test(email) === false
}
const generateJWTToken = (jwt, userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '12h' })
}

module.exports = {
    userAlreadyExists,
    isPasswordLengthValid,
    passwordsDoNotMatch,
    isMissingField,
    isNameInvalid,
    isEmailInvalid,
    generateJWTToken
}