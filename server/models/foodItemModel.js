const { pool } = require('../config/db')

class FoodItem {
    static async findAll(id) {
        try {
            const sql = `SELECT * FROM food_item WHERE user_id = $1`
            const foodItems = (await pool.query(sql, [id])).rows
            return foodItems
        } catch (error) {
            console.log(error.message)
        }
    }
    static async create(foodItem) {

    }
    static async findByIdAndUpdate(id) {

    }
    static async findByIdAndDelete(id) {

    }
}

module.exports = FoodItem