const { pool } = require('../config/db')

class User {
    static async findByEmail(email) {
        try {
            const sql = `SELECT * FROM users WHERE email = $1`
            return (await pool.query(sql, [email])).rows[0]
        } catch (error) {
            console.log(error.message)
        }
    }
    static async create(user) {
        try {
            const { name, email, password } = user
            const sql = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`
            return (await pool.query(sql, [name, email, password])).rows[0]
        } catch (error) {
            console.log(error.message)
        }
    }
    static async findById(id) {
        try {
            const sql = `SELECT * FROM users WHERE user_id = $1`
            return (await pool.query(sql, [id])).rows[0]
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = User