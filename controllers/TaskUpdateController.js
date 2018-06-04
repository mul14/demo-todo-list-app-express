const mysql = require('../database')

module.exports = (req, res) => {

  const sql = 'UPDATE tasks SET name = ?, done = ? WHERE id = ?'
  const values = [req.body.name, req.body.done, req.params.id]

  mysql.query(sql, values, (err, results, fields) => {
    if (err) throw err

    res.json(results)
  })

}
