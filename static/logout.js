const logout = document.getElementById("logout");
// ==for the hamburger button icon
let hamburgerBtn = document.getElementById("btn");
const closebutton = document.getElementById("bars");
let x = true;

hamburgerBtn.addEventListener("click", () => {
  x = !x;
  if (x) {
    // closebutton.classList.remove("fa-rectangle-xmark");
    closebutton.classList.remove("fa-regular", "fa-x");
    closebutton.classList.add("fa-solid", "fa-bars");
  } else {
    closebutton.classList.remove("fa-solid", "fa-bars");
    closebutton.classList.add("fa-regular", "fa-x");
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