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
    try {
        const { name, calories } = request.body
        const { userId } = request.user
        const foodItem = await FoodItem.create({ name, calories, userId })
        response.status(201).json(foodItem)
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: 'Something went wrong' })
    }
}

const updateFoodItem = async (request, response) => {
    response.send(`Update Food Item with id ${request.params.id}`)
}

const deleteFoodItem = async (request, response) => {
    try {
        const { id } = request.params
        await FoodItem.findByIdAndDelete(id)
        response.status(200).json({ message: 'Food Item deleted' })
    } catch (error) {
        response.status(500).json({ error: 'Something went wrong' })
    }
}

module.exports = {
    deleteFoodItem,
    updateFoodItem,
    getFoodItems,
    setFoodItem,
}