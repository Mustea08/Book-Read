const logout = document.getElementById("logout");
// ==for the hamburger button icon
let hamburgerBtn = document.getElementById("btn");
const bars = document.getElementById("bars");
let x = true;

hamburgerBtn.addEventListener("click", () => {
  x = !x;
  if (x) {
    // closebutton.classList.remove("fa-rectangle-xmark");
    bars.classList.remove("fa-regular", "fa-x");
    bars.classList.add("fa-solid", "fa-bars");
  } else {
    bars.classList.remove("fa-solid", "fa-bars");
    bars.classList.add("fa-regular", "fa-x");
  }
});

logout.addEventListener("click", () => {
  // remove the name item from local storage when click on log out button
  localStorage.removeItem("name");
  window.location.href = "/";
});

window.onload = function() {
  if (!localStorage.getItem("name")) {
    window.location.href = "/";
  }
};