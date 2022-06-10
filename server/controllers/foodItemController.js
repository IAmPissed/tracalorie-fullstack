const getFoodItems = (request, response) => {
    response.send(`Get Food Items`)
}

const setFoodItem = (request, response) => {
    response.send(`Set Food Item`)
}

const updateFoodItem = (request, response) => {
    response.send(`Update Food Item with id ${request.params.id}`)
}

const deleteFoodItem = (request, response) => {
    response.send(`Delete Food Item with id ${request.params.id}`)
}

module.exports = {
    deleteFoodItem,
    updateFoodItem,
    getFoodItems,
    setFoodItem,
}