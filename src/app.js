window.addEventListener("DOMContentLoaded", () => {
  /** Easy selector helper function */
  const select = (element, all = false) => {
    element = element.trim();
    return all
      ? [...document.body.querySelectorAll(element)]
      : document.body.querySelector(element);
  };

  /** Easy on scroll event listener */
  const onscroll = (element, listener) => {
    element.addEventListener("scroll", listener);
  };

  /** Navbar shrink function */
  const navbarShrink = () => {
    const navbarCollapsible = select("#main-nav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  /** Shrink the navbar */
  navbarShrink();

  /** Shrink the navbar when page is scrolled */
  document.addEventListener("scroll", navbarShrink);

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = select(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    select("#navbarResponsive .nav-link", true)
  );
  responsiveNavItems.map((responsiveNavItem) => {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  /** Back to top button */
  const backtotop = select(".scroll-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    onscroll(document, toggleBacktotop);
  }
});
