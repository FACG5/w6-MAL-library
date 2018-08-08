
const dbconnection = require("../db_connection");



const deleteData = (id,cb)=>{
    const sql = { 
        text: "DELETE FROM books where id = $1 ",
        values:[id]
     };
    dbconnection.query(sql, (err, res) => {
        if (err) {
            console.log(err.rows)
            cb(err);
        } else {
            console.log(res.rows)
            cb(null, res.rows);
        }
    });
}

module.exports = deleteData
