const dbconnection =require('../db_connection');
const sql ={text:'SELECT users.first_name, books.name, books.description , books.author, users.id, books.id FROM users join bookuser on users.id = bookuser.users_id join books on bookuser.book_id = books.id;'};

const getdata = (cb) => dbconnection.query(sql, (err,res) => {
    if (err) {
        cb(err);
    }
    else{cb(null, res.rows);}
});

module.exports=getdata;

