var pubContainer = document.getElementById("repositories");
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://api.github.com/users/bnjenner/repos');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);

};
ourRequest.send( );

function renderHTML(data) {
  
  var htmlString = ""; 

  for (i = 0; i < data.length; i++) {
    if (data[i].name != "Publications" && data[i].name != "bnjenner.github.io") { 
      htmlString += "<li><a href=\"" + data[i].html_url + "\"  target=\"_blank\">" + data[i].name + "</a></li>";
    }
  }
  pubContainer.insertAdjacentHTML('beforeend', htmlString);
}
