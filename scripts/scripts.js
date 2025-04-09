const year = document.getElementById('year');
const newYear = new Date().getFullYear();
year.textContent = `${newYear}`;

const first_name = document.getElementById('firstName');
const last_name = document.getElementById('lastName');
function getFullName(first,last){
  const full_name = concat(first, last);
}