let botHome = document.getElementById("homeBot");
let botWork = document.getElementById("workBot");
let botArtist = document.getElementById("artistBot");
let botContact = document.getElementById("contactBot");
let botHamb = document.getElementById("hamb");
let modal = document.getElementById("myModal");

botArtist.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("artist").scrollIntoView({ behavior: "smooth" });
});
botHome.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
botWork.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});
botContact.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
botHamb.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
  document.getElementById("nav").classList.add("show");
});
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("myNavbar").classList.remove("show");
    modal.style.display = "none";
  }
};
