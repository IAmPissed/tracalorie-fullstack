const express = require('express')
const router = express.Router()
const { getFoodItems, setFoodItem, updateFoodItem, deleteFoodItem } = require('../controllers/foodItemController')

router.route('/').get(getFoodItems).post(setFoodItem)
router.route('/:id').delete(deleteFoodItem).put(updateFoodItem)

module.exports = router