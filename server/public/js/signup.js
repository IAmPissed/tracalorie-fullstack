// WHAT NEES TO BE DONE?
const API_URL = `/api/users/signup`
const REGEX_PATTERNS = {
    name: /^([a-zA-Z]{3,40})\s([a-zA-Z]){3,40}$/,
    email: /^[a-z\d\.]+@([a-z\-]+\.)+[a-z\-]{2,6}$/,
    password: /^.{8,20}$/
}
const formData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordConfirmationInput = document.querySelector('#passwordConfirmation')
const signupForm = document.querySelector('[data-signup-form]')

const formInputs = [nameInput, emailInput, passwordInput, passwordConfirmationInput]

Object.entries(formData).forEach(([key, value], index) => {
    formInputs[index].name === key ? formInputs[index].value = value : null
})
const setFormData = (e) => {
    formData[e.target.name] = e.target.value
}
const checkInput = (e) => {
    const { name } = e.target
    name === 'passwordConfirmation' ? makeSureMatchesPassword() : null
    const pattern = REGEX_PATTERNS[name]
    validateInput(pattern, e.target)
}
const validateInput = (pattern, input) => {
    if (pattern == null) return
    if (pattern.test(input.value)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
const makeSureMatchesPassword = () => {
    if (formData.password === formData.passwordConfirmation) {
        passwordConfirmationInput.classList.remove('invalid')
        passwordConfirmationInput.classList.add('valid')
    } else {
        passwordConfirmationInput.classList.remove('valid')
        passwordConfirmationInput.classList.add('invalid')
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    const user = isFormDataValid() ? createUser() : null
    if (user) sendRequest(user)
}
const sendRequest = (user) => {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}
const isFormDataValid = () => {
    if (formData.password !== formData.passwordConfirmation) return false
    if (isNameValid() && isEmailValid() && isPasswordValid()) return true
}
const isNameValid = () => {
    return REGEX_PATTERNS.name.test(formData.name)
}
const isEmailValid = () => {
    return REGEX_PATTERNS.email.test(formData.email)
}
const isPasswordValid = () => {
    return REGEX_PATTERNS.password.test(formData.password)
}
const createUser = () => {
    return { ...formData }
}

signupForm.addEventListener('submit', handleSubmit)
formInputs.forEach(input => input.addEventListener('input', setFormData))
formInputs.forEach(input => input.addEventListener('input', checkInput))