const extractToken = (request) => {
    return request.headers.authorization.split(' ')[1];
}

module.exports = {
    extractToken
}