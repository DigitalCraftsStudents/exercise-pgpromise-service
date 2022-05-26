const pgPromise = require('pg-promise')()
require('dotenv').config()

const db = pgPromise({
  database: process.env.DATABASE_NAME || 'pgpromise_products',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '5432',
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || '',
})

module.exports = db