const dele=(arr,id)=>{
  console.log(arr.id);
  console.log(arr);
  return arr.filter((x) => {
    console.log(arr.id);
    console.log(arr);
    if(x.id !== id)
    return x;
  })
}


const rendering = arr => {
  const table = document.getElementById("table_book");
  const results = JSON.parse(arr);
  results.forEach(arr => {
    const row = document.createElement("tr");
    row.id = arr.id;

    const first_name = document.createElement("td");
    first_name.innerHTML = arr.first_name;
    row.appendChild(first_name);

    const name = document.createElement("td");
    name.innerHTML = arr.name;
    row.appendChild(name);

    const description = document.createElement("td");
    description.innerHTML = arr.description;
    row.appendChild(description);

    const author1 = document.createElement('td');
    author1.innerHTML = arr.author;
    row.appendChild(author1);
    
    const someText = document.createElement('td');
    if(arr.reserved === true) someText.innerHTML = 'true';
    else someText.innerHTML = 'false';
    row.appendChild(someText);

    const del = document.createElement("button");
    del.textContent="DElETE"
    row.appendChild(del);

    del.addEventListener("click", (e) =>{      
      
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

fetchdata("GET","/getbooks",null, insertBooks);
