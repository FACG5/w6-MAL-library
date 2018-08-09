
function fetchdata(method,url,data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          cb(null, xhr.responseText);
      } else {
        //   cb("error" + xhr.responseType);
      }
  };
  xhr.open(method, url, true);
  xhr.send(data);
}
