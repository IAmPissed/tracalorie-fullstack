const getFoodItems = async (request, response) => {
    response.send(`Get Food Items`)
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