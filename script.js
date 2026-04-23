document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('nav-overlay');

  // Mobile toggle
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close menu on link click
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  // Smooth scroll with offset
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      const offset = 50;
      const offsetPosition = target.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      menu.classList.add('hidden');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {

      overlay.style.width = "100%";
      navbar.classList.add('shadow-md');

      navbar.querySelectorAll('a, button').forEach(el => {
        el.classList.remove('text-white');
        el.classList.add('text-gray-700');
      });

    } else {

      overlay.style.width = "0%";
      navbar.classList.remove('shadow-md');

      navbar.querySelectorAll('a, button').forEach(el => {
        el.classList.add('text-white');
        el.classList.remove('text-gray-700');
      });
    }
  });

  // 🔥 SMOOTH SCROLL ANIMATION (UP + DOWN)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right')
    .forEach(el => observer.observe(el));
    const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {

    overlay.style.width = "100%";
    navbar.classList.add('shadow-md');

    navbar.querySelectorAll('a, button').forEach(el => {
      el.classList.remove('text-white');
      el.classList.add('text-gray-700');
    });

    // 🔥 CHANGE LOGO
    logo.src = "src/logo-white.png";

  } else {

    overlay.style.width = "0%";
    navbar.classList.remove('shadow-md');

    navbar.querySelectorAll('a, button').forEach(el => {
      el.classList.add('text-white');
      el.classList.remove('text-gray-700');
    });

    // 🔥 BACK TO ORIGINAL LOGO
    logo.src = "src/logo-1.png";
  }
});

});
