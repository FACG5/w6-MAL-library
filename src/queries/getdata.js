const dbconnection =require('../database/db_connection');
const sql ={text:'SELECT * FROM books;'};

const getdata = (cb) => dbconnection.query(`SELECT * FROM books;`, (err,res) => {
    if (err) {
        cb(err);
    }
    cb(null, res.rows);
});

module.exports=getdata;
