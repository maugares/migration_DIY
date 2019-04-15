// index.js
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL
const client = new Client({ connectionString })

client.connect()
  .then(_ => {
    console.log('Connected to Postgres')

    return client.query('SELECT name FROM users')
      .then(result => console.log('users:', result.rows))
  })
  .catch(console.error)