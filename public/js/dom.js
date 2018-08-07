

fetchdata('GET',"/getbooks", (err,res) => {
  if(err)console.log(err);
  else{
    console.log(JSON.parse(res));

  }
})
