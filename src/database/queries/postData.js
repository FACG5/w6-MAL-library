const dbconnection = require("../db_connection");
const sqlbook = { text: "INSERT INTO books (name, description, author) VALUES ($1, $2, $3) RETURNING id ;" };
const sqluser = { text: "INSERT INTO users (first_name) VALUES ($1) RETURNING id;" };
const sqlbookuser = { text: "INSERT INTO bookuser (book_id, users_id) VALUES ($1, $2);" };


const postdata = (cb, ...args) => {
  let sql='';
  
  switch (args.length) {
    case 1 :
    sql = sqluser;
    break;

    case 2 :
    sql = sqlbookuser;
    break;

    case 3 :
    sql = sqlbook;
    break;
  }
  
  dbconnection.query(sql, args, (err, res) => {
    if (err) {      
      cb(err);
    } else {

    cb(null, res);
    }
  });
};


module.exports = postdata;

