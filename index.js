// index.js | step 2
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL
const client = new Client({ connectionString })

client.connect()
  .then(_ => {
    console.log('Now connected with Postgres')

    return client.query('SELECT name FROM users')
      .then(result => console.log(result.rows))
  })
  .then(_ => {
    return client.query('SELECT owner FROM companies')
      .then(result => console.log(result.rows))
  })
  .catch(console.error)