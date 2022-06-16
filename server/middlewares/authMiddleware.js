const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const { extractToken } = require('../utils/authMiddlewareUtils');

const protect = async (request, response, next) => {
    try {
        let token;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
            token = extractToken(request);
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const { name, userId, email } = await User.findById(decodedToken.userId);
            request.user = { name, userId, email };
            next()
        }
    } catch (error) {
        response.status(401).json({ error: 'You are not authorized to access this resource' });
    }
}

module.exports = { protect }