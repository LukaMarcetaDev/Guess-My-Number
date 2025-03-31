document.addEventListener("DOMContentLoaded", function () {
  let lastScroll = window.scrollY;
  let ticking = false;

  const navbar = document.querySelector(".navbar");
  const navMenu = document.querySelector(".w-nav-menu");
  const navToggle = document.querySelector(".w-nav-button");
  const navLinks = document.querySelectorAll(".w-nav-menu a");

  //  Function to handle scrolling and hide/show navbar
  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.toggle("hidden", currentScroll > lastScroll); // Hide when scrolling down
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  //  Optimized scroll event listener using requestAnimationFrame
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  //  Function to close the navigation menu
  function closeMenu() {
    if (navMenu.classList.contains("w--open")) {
      navToggle.click();
    }
  }

  //  Close menu when clicking a navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        const section = document.querySelector(href);
        if (section) {
          event.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
          setTimeout(closeMenu, 300);
        }
      }
    });
  });

  //  Close menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!navMenu.classList.contains("w--open")) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggleButton = navToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggleButton) {
      closeMenu();
    }
  });
});
