const dbconnection = require("../db_connection");

const deleteData = (id, cb) => {
  const sql = `DELETE FROM bookuser where book_id = ${id}; 
               DELETE FROM bookuser where book_id = ${id}; 
               DELETE FROM bookuser where book_id = ${id};`;

  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = { deleteData };
