const loginUser = async (request, response) => {
    response.send('Login User')
}

const signupUser = async (request, response) => {
    response.send(`Signup User`)
}

const getUser = async (request, response) => {
    response.send('Navigate User to Dashboard')
}


module.exports = {
    loginUser,
    signupUser,
    getUser
}