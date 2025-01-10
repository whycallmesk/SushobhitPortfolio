

document.addEventListener('DOMContentLoaded', function() {
  
  const menuT = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
 
  menuT.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      const icon = menuT.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-x');
  });

  document.querySelector(".nav-links .about-link").addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(".content-section");
      if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  });

  document.querySelector(".btn-outline").addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(".content-section");
      if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  });
});

document.querySelector(".nav-link[href='#contact-section']").addEventListener("click", function(e) {
  e.preventDefault();  // Prevent the default link behavior

  const target = document.querySelector("#contact-section");  // Target the contact-section
  if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });  // Smooth scroll to the contact section
  }
});



document.querySelector(".nav-link[href='#hero']").addEventListener("click", function(e) {
  e.preventDefault();  // Prevent the default link behavior

  const target = document.querySelector("#hero");  // Target the hero section
  if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });  // Smooth scroll to the hero section
  }
});

