const express = require('express')
const router = express.Router()

router.route('/').get(getFoodItems).post(setFoodItem)
router.route('/:id').delete(deleteFoodItem).put(updateFoodItem)

module.exports = router