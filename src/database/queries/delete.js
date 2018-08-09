const dbconnection = require("../db_connection");

const deleteData = (id, cb) => {
  // const sqlbook = { 
  //   text: "DELETE FROM bookuser where book_id = $1;",
  //   values:[+id] 
  // };
  const sql = `DELETE FROM bookuser where book_id = ${id}; 
               DELETE FROM bookuser where book_id = ${id}; 
               DELETE FROM bookuser where book_id = ${id};`

  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const deleteDatauser = (id, cb) => {
  const sqluser = { text: "DELETE FROM users where id = $1 RETURNING id;",values:[id] };
  dbconnection.query(sqluser, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const deleteDatabookuser = (id, cb) => {
  const sqlbookuser = { text: "DELETE FROM bookuser where id = $1 ;",values:[id] };
  dbconnection.query(sqlbookuser, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = { deleteData, deleteDatauser, deleteDatabookuser };
// const sqluser = { text: "DELETE FROM users where id = $1 RETURNING id;" };
//     const sqlbookuser = { text: "DELETE FROM bookuser where id = $1 ;" };
