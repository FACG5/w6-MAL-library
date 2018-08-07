const fetch = (method, url, cb) => {
  const xhr = new XMLHttpRequest;
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        cb(null, xhr.responseText);
    } else {
        cb('error' + xhr.responseType);
    }
  }
  xhr.open(method, url, true);
  xhr.send();
}