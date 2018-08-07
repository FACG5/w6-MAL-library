const dbconnection =require('../db_connection');
const sql ={text:'SELECT * FROM books;'};

const getdata = (cb) => dbconnection.query(sql, (err,res) => {
    if (err) {
        cb(err);
    }
    cb(null, res.rows);
});

module.exports = getdata;