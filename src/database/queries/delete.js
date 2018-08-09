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

// <<<<<<< HEAD
// const deleteDatauser = (id, cb) => {
//   const sqluser = { text: "DELETE FROM users where id = $1 RETURNING id;",values:[id] };
//   dbconnection.query(sqluser, (err, res) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, res.rows);
//     }
//   });
// };
// =======
// const deleteData = (id,cb)=>{
//     const sql = { 
//         text: "DELETE FROM books where id = $1 ",
//         values:[id]
//      };
//     dbconnection.query(sql, (err, res) => {
//         if (err) {
//             console.log(err.rows)
//             cb(err);
//         } else {
//             console.log(res.rows)
//             cb(null, res.rows);
//         }
//     });
// }
// >>>>>>> f6c36f4cc972825559305f981db54be166b44c60

// const deleteDatabookuser = (id, cb) => {
//   const sqlbookuser = { text: "DELETE FROM bookuser where id = $1 ;",values:[id] };
//   dbconnection.query(sqlbookuser, (err, res) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, res.rows);
//     }
//   });
// };
// module.exports = { deleteData, deleteDatauser, deleteDatabookuser };
// // const sqluser = { text: "DELETE FROM users where id = $1 RETURNING id;" };
// //     const sqlbookuser = { text: "DELETE FROM bookuser where id = $1 ;" };
