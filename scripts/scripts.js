fetch("header.html")
.then(res => res.text())
.then(data => (document.getElementById("header").innerHTML = data));

fetch("footer.html")
.then(res => res.text())
.then(data => (document.getElementById("footer").innerHTML = data));

const newYear = new Date().getFullYear();
const year = document.getElementById('year');
year.textContent = `${newYear}`;

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  // Observer options
  const options = {
    root: null,  // relative to the viewport
    threshold: 0.2, // trigger when 20% of the element is visible
  };

  // Create a new intersection observer
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  // Observe each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

