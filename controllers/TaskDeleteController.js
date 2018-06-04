const mysql = require('../database')

module.exports = (req, res) => {

  const sql = 'DELETE FROM tasks WHERE id = ?'
  const values = [req.params.id]

  mysql.query(sql, values, (err, results, fields) => {
    if (err) throw err

    res.json(results)
  })

}
