const express = require('express')
const router = express.Router()
const { getFoodItems, setFoodItem, updateFoodItem, deleteFoodItem } = require('../controllers/foodItemController')
const { protect } = require('../middlewares/authMiddleware')

router.route('/').get(protect, getFoodItems).post(protect, setFoodItem)
router.route('/:id').delete(protect, deleteFoodItem).put(protect, updateFoodItem)

module.exports = router