(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const top_banner = document.querySelector(".top-banner");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    // if (window.pageYOffset > sticky) {
    //   top_banner.classList.add("hidden");
    // } else {
    //   top_banner.classList.remove("hidden");
    // }

    // === logo change
    // if (ud_header.classList.contains("sticky")) {
    //   logo.src = "assets/images/logo/uplogo2.svg";
    // } else {
    //   logo.src = "assets/images/logo/uplogo2.svg";
    // }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });
  
  

  //====== header scrolling content

  var title = ["Engage ", "Accelerate ", "Sustain "];
  var subtitle = [
    "our agile software development team to co-create or update your digital product with the latest web, mobile and cloud technologies.",
    "your businesses growth with our proven development and products to achieve zero latency and quality services.",
    "your company capabilities by decresing technology costs without losing on high quality software infrustructure.",
  ];

  var counter = 1;

  var inst = setInterval(textSequence, 8000);

  function textSequence() {
    document.querySelector(".sequence").classList.remove("lineUp");

    setTimeout(function () {
      document.querySelector(".sequence").classList.add("lineUp");

      document.querySelector("#title-sequence").innerHTML = title[counter];
      document.querySelector("#subtitle-sequence").innerHTML =
        subtitle[counter];

      counter++;

      if (counter >= title.length) {
        counter = 0;
      }
    }, 1000);
  }

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("-rotate-90");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 30;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

  
})();


