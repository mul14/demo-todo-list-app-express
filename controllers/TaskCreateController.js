const mysql = require('../database')

module.exports = (req, res) => {

  const sql = 'INSERT INTO tasks VALUES (?, ?, ?)'
  const values = [null, req.body.name, false]

  mysql.query(sql, values, (err, results, fields) => {
    if (err) throw err

    res.json(results)
  })

}
