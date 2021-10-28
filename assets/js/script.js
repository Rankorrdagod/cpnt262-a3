let output= '';
const gallery = document.querySelector('.gallery')

fetch('https://epic.gsfc.nasa.gov/api/natural')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
   console.log(data);
    data.forEach(function(epic){
    // console.log(epic);  
    output += `<li>${epic.identifier}</li>`;

    })
    gallery.innerHTML = `<ul>${output}</ul>`;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
 console.log(output)

