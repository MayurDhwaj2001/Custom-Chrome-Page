var a = document.getElementById("search");

// To Focus
function focs() {
  a.focus();
}

// Search On Google
function googleSearch() {
  var text = document.getElementById("search").value;
  var cleanQuery = text.replace(" ", "+", text);
  var url = "http://www.google.com/search?q=" + cleanQuery;
  window.location.href = url;
}

// Search On Enter Press
a.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
