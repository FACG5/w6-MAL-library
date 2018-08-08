const {
  handelHomePage,
  serverStaticFile,
  handelError,
  getbooks,
  postdatabooks,
  deleteBooks
} = require("./handler/functions.js");
const router = (req, res) => {
  const endponit = req.url;
  if (endponit === "/") {
    handelHomePage(req, res);
  } else if (endponit.includes("public")) {
    serverStaticFile(req, res);
  } else if (endponit == "/getbooks") {
    getbooks(req, res);
  } else if (endponit == "/insertBooks") {
    postdatabooks(req, res);
  } else if (endponit === "/deleteBooks") {
    deleteBooks(req, res);
  } else {
    handelError(res);
  }
};

module.exports = router;
