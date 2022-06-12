const express = require('express')
const router = express.Router()
const { loginUser, signupUser, getUser } = require('../controllers/userController')

router.route('/login').post(loginUser).get((req, res) => res.render('login', { title: 'Login' }))
router.route('/signup').post(signupUser).get((req, res) => res.render('signup', { title: 'Signup' }))

module.exports = router