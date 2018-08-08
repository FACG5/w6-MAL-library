const path = require("path");
const read = require("./read.js");
const getdata = require("../database/queries/getdata");
const postdata = require("../database/queries/postData");
const deleteData = require("../database/queries/delete");
const queryString = require("querystring");

const handelHomePage = (request, response) => {
  response.writeHead(200, { "content-type": "text/html" });

  read(path.join(__dirname, "..", "..", "public", "index.html"), (err, res) => {
    if (err) {
      response.writeHead(500, { "content-type": "text/html" });
      response.end("<h1>Sorry, There is a problem</h1>");
    } else {
      response.end(res);
    }
  });
};

const getbooks = (request, response) => {
  getdata((err, res) => {
    if (err) {
      response.writeHead(500, { "content-type": "text/html" });
      response.end("<h1>Sorry, There is a problem</h1>");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      let result = JSON.stringify(res);
      response.end(result);
    }
  });
};

const postdatabooks = (request, response) => {
  let data = '';
  request.on('data', function (chunk) {
    data += chunk;
  });
  request.on('end', () => {
    const name = queryString.parse(data).name;
    const description = queryString.parse(data).description;
    const author = queryString.parse(data).author;
    const userName = queryString.parse(data).first_name;
    postdata((err, res) => {
      if (err) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem add  books</h1>');
      } else {
        const bookId = res.rows[0].id;

        postdata((err, res) => {
          if (err) {
            response.writeHead(500, 'Content-Type:text/html');
            response.end('<h1>Sorry, there was a problem add  books</h1>');
          } else {
            console.log(res.rows);
            const userId = res.rows[0].id;
            postdata((err, res) => {
              if (err) {
                response.writeHead(500, 'Content-Type:text/html');
                response.end('<h1>Sorry, there was a problem add  books</h1>');
              }
            }, bookId, userId);
          }
        }, userName);
      }
    }, name, description, author);
    response.writeHead(200, {
      "Content-Type": "text/html"
    });

    handelHomePage(request, response);
  });
};

const deleteBooks = (request, response) => {
  let bookId = "";
  request.on('data', function (chunk) {
    bookId += chunk;
  });

  request.on("end", () => {
    console.log(bookId)
    deleteData(bookId, (err, res) => {
      if (err) {
        response.end("<h1>Sorry, There is a problem</h1>");
      } else {
        response.writeHead(200, { "content-type": "application/json" });
        let result = JSON.stringify(res);
        response.end(result);
      }
    })

  })

}

const serverStaticFile = (request, response) => {
  const endponit = request.url;
  const extention = endponit.split(".")[1];
  const contenttype = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpg",
    png: "image/png",
    json: "application/json",
    gif: "image/gif"
  };
  response.writeHead(200, {
    "content-type": contenttype[extention]
  });

  read(path.join(__dirname, "..", "..", endponit), (err, res) => {
    if (err) {
      response.writeHead(500, { "content-type": "text/html" });
      response.end("<h1>Sorry, There is a problem</h1>");
    } else response.end(res);
  });
};

const handelError = response => {
  response.writeHead(404, { "content-type": "text/html" });
  read(path.join(__dirname, "..", "..", "public", "errp.html"), (err, res) => {
    if (err) {
      response.end(err.message);
    } else response.end(res);
  });
};

module.exports = {
  handelHomePage,
  serverStaticFile,
  handelError,
  getbooks,
  postdatabooks,
  deleteBooks
};
