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

const output = document.getElementById("toast");
function clipboard() {
  const copyText =
    '<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">';

  navigator.clipboard.writeText(copyText);

  output.style.visibility = "visible";
  setTimeout(function () {
    output.style.visibility = "hidden";
  }, 2000);
}
