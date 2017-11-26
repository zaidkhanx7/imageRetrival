const markup = `
  <div class="card">
        <input type="text" placeholder="Enter the text to be searched "  id="searchbox"/>
        <button onclick="clicked()" class="searchbutton">search</button>
    </div>
`;

document.body.innerHTML = markup;

window.clicked=()=>{
    var searchinput= document.getElementById("searchbox");
    var searchinputvalue=searchbox.value
    console.log("search input ", searchinputvalue);
}
