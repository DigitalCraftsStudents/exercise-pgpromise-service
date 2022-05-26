const fs = require('fs')
const path = require('path')
const db = require('../db')

const file = (process.argv[2] || 'seed') + '.sql'
const sql = fs.readFileSync(path.join(__dirname, file), 'utf8')

db.query(sql)
  .then(() => {
    console.log('Database seeded successfully.')
    process.exit(0)
  })
  .catch(err => {
    console.error('Error seeding database:', err.message)
    process.exit(1)
  })

