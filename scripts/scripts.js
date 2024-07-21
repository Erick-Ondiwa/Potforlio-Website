//function loadHTML(elementId, fileName) {
  //   fetch(fileName)
  //       .then(response => response.text())
  //       .then(data => document.getElementById(elementId).innerHTML = data)
  //       .catch(error => console.error('Error loading HTML:', error));
  // }
  
  // loadHTML("header", "header.html");
  // loadHTML("footer", "footer.html");

const year = document.getElementById('year');
const newYear = new Date().getFullYear();
year.textContent = `${newYear}`;

const first_name = document.getElementById('firstName');
const last_name = document.getElementById('lastName');
function getFullName(first,last){
  const full_name = concat(first, last);
}
const phone_number = document.getElementById('telephone');
const email_address = document.getElementById('emailAddress');
const suggestion = document.getElementById('textArea');
const finish_button = document.getElementById('finishButton');
