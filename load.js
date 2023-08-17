import $ from "jquery";

// $(".load_navbar").load("/pages/Navbar/Navbar.html");
// $(".load_footer").load("/pages/Footer/Footer.html");

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

// const hamburger = document.querySelector(".hamburger");
// const slidenav = document.querySelector(".navbar_right");

$(document).ready(function () {
  $(".hamburger").click(function () {
    if (!$(".hamburger").hasClass("fa-xmark")) {
      $(".hamburger").addClass("fa-xmark");
      $(".navbar_right").removeClass("d-none");
      $(".navbar_right").fadeIn();
    } else {
      $(".hamburger").removeClass("fa-xmark");
      $(".navbar_right").addClass("d-none");
      $(".navbar_right").fadeOut();
    }
  });
});
window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY;
  let navbar_select = document.querySelector(".load_navbar");
  // Print the scroll position to the console
  if (scrollPos > 100) {
    navbar_select.classList.add("sticky_navbar");
  } else {
    navbar_select.classList.remove("sticky_navbar");
  }
});
