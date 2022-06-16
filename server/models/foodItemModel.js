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
        try {
            const { name, calories, userId } = foodItem
            const sql = `INSERT INTO food_item (food_item_name, food_item_calories, user_id) VALUES ($1, $2, $3) RETURNING *`
            return (await pool.query(sql, [name, calories, userId])).rows[0]
        } catch (error) {
            console.log(error.message)
        }
    }
    static async findByIdAndUpdate(id) {

    }
    static async findByIdAndDelete(id) {
        try {
            const sql = `DELETE FROM food_item WHERE food_item_id = $1`
            await pool.query(sql, [id])
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = FoodItem