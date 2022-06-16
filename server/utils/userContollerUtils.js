const userAlreadyExists = async (email) => {
    return await User.findByEmail(email)
}
const isPasswordShort = (password) => {
    return password.length < 8
}
const passwordsDoNotMatch = (password, passwordConfirmation) => {
    return password !== passwordConfirmation
}

module.exports = {
    userAlreadyExists,
    isPasswordShort,
    passwordsDoNotMatch
}