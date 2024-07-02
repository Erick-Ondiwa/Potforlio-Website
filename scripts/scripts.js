const year = document.getElementById('year');
const newYear = new Date().getFullYear();
year.textContent = `${newYear}`;

function loadHTML(elementId, fileName) {
  fetch(fileName)
      .then(response => response.text())
      .then(data => document.getElementById(elementId).innerHTML = data)
      .catch(error => console.error('Error loading HTML:', error));
}

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");