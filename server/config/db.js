const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

const connectDB = async () => {
    try {
        const connection = await pool.connect()
        console.log(`PostgreSQL Connected`.cyan.underline)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connectDB,
    pool
}