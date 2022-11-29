const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("show");
      }
   });
});

const rights = document.querySelectorAll(".rights");
const lefts = document.querySelectorAll(".lefts");
lefts.forEach((el) => observer.observe(el));
rights.forEach((el) => observer.observe(el));

// To-Top Button
let topPg = document.querySelector(".top-pg");
window.addEventListener("scroll", () => {
   if (window.scrollY >= 600) {
      topPg.style.display = "block";
   } else {
      topPg.style.display = "none";
   }
});
