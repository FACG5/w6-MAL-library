(function(){

  const rendering = arr => {
    const table = document.getElementById("table_book");
    const results = JSON.parse(arr);
    results.forEach(arr => {
      console.log(arr)
      const row = document.createElement("tr");
   const first_name = document.createElement("td");
    first_name.innerHTML = arr.first_name;
    row.appendChild(first_name);
    
    const name = document.createElement("td");
    name.innerHTML = arr.name;
    row.appendChild(name);
    
    const description = document.createElement("td");
    description.innerHTML = arr.description;
    row.appendChild(description);
    
    const author1 = document.createElement("td");
    author1.innerHTML = arr.author;
    row.appendChild(author1);
    
    const del = document.createElement("button");
    del.textContent = "DElETE";
    row.appendChild(del);
    
    del.addEventListener("click", e => {
      console.log(arr.id);
      fetchdata(
        "POST","/deleteBooks",arr.id,
        (err, res) => {
          if (err) {
            // console.log(err);
          } else {
            console.log(arr.id);
            console.log(res);
          }
        })
      });
      table.appendChild(row);
    });
  };
  
const insertBooks = (err, data) => {
  if (err) {
    console.log(err);
  } else {    
    rendering(data);
  }
};


fetchdata("GET", "/getbooks", null, insertBooks);

})()