const FoodItem = require('../models/foodItemModel')

const getFoodItems = async (request, response) => {
    try {
        console.log(request.user)
        const foodItems = await FoodItem.findAll(request.user.userId)
        response.status(200).json(foodItems)
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: 'Something went wrong' })
    }
}

const setFoodItem = async (request, response) => {
    response.send(`Set Food Item`)
}

const updateFoodItem = async (request, response) => {
    response.send(`Update Food Item with id ${request.params.id}`)
}

const deleteFoodItem = async (request, response) => {
    response.send(`Delete Food Item with id ${request.params.id}`)
}

module.exports = {
    deleteFoodItem,
    updateFoodItem,
    getFoodItems,
    setFoodItem,
}