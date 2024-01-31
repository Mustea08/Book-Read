const logOutBtn = document.getElementById("logout");
// ==for the hamburger button icon
let hamburgerBtn = document.getElementById("btn");
const bars = document.getElementById("bars");
let clickedBars = false;

// function  to show/hide menu when clicking on the hamburger button.
function handelBars(){
  if (clickedBars) {
    bars.classList.remove("fa-regular", "fa-x");
    bars.classList.add("fa-solid", "fa-bars");
  } else {
    bars.classList.remove("fa-solid", "fa-bars");
    bars.classList.add("fa-regular", "fa-x");
  }
  clickedBars = !clickedBars;
}

hamburgerBtn.addEventListener("click", handelBars);

logOutBtn.addEventListener("click", () => {
  // remove the name item from local storage when click on logout button
  localStorage.removeItem("name");
  window.location.href = "/";
});

window.onload = function() {
  if (!localStorage.getItem("name")) {
    window.location.href = "/";
  }
};