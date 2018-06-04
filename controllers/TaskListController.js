const mysql = require('../database')

module.exports = (req, res) => {

  mysql.query('SELECT * FROM tasks', (err, results, fields) => {
    if (err) throw err

    res.json(results)
  })

}
