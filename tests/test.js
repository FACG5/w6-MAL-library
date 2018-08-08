const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/database/queries/getdata");
const postData = require("../src/database/queries/getdata");
const supertest = require('supertest');
const router = require('../src/router');


  tape('Test for the database', (t)=> {
    runDbBuild(function(err, res){
      t.notOk(err)
      getData((err, res) => {
          t.notOk(err)
          t.equal(res.length > 0, true, 'There is data in the database')
          t.end()
      })
    });
  });


tape('Test2 for the database', (t)=> {
  runDbBuild(function(err, res){
    t.notOk(err)
    postData((err, res) => {
        t.notOk(err)
        t.equal(res.length > 0, true, 'Data base has row data inside')
        t.end()
    })
  });
});


tape('Home route returns a status code of 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err);
      t.end();
    });
});

tape('Erorr page status code', (t) => {
  supertest(router)
    .get('/search')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err);
      t.end();
    });
});
  