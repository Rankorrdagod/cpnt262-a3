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
    console.log();  
    output += `<li> 
    ID:${epic.identifier} v.${epic.version} <a href="https://epic.gsfc.nasa.gov/archive/natural/2021/10/27/jpg/${epic.image}.jpg">
    <img src="https://epic.gsfc.nasa.gov/archive/natural/2021/10/27/jpg/${epic.image}.jpg" alt="Pictures from Oct 27th" width="275" height="275"></a>
    ${epic.caption} on ${epic.date}
    </li>`;
   
  
    })
    gallery.innerHTML = `<ul>${output}</ul>`;
    
  })
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
 console.log(output)

