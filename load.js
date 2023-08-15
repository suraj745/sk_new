import $ from "jquery";

$(".load_navbar").load("/pages/Navbar/Navbar.html");
$(".load_footer").load("/pages/Footer/Footer.html");

var loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
