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

    }
    static async findById(id) {

    }
}

module.exports = User