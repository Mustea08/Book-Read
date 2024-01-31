//take the input with the id of "name" from the index.html file.
const userName = document.getElementById("name");
const loginBtn = document.getElementById("btn");
const displayErrorMsg = document.querySelector(".invalid");

// function that handles the the login in the index page
function  handleLogin(e) {
  const username = userName.value.trim();
  if (username !== "" && /^[a-zA-Z]+$/.test(username)) {
    localStorage.setItem("name", username);
  } else {
    e.preventDefault();
    displayErrorMsg.style.display = "block";
    setTimeout(() => {
      displayErrorMsg.style.display = "none";
    }, 3000);
  }
}

loginBtn.addEventListener("click", handleLogin);

window.onload = function () {
  if (localStorage.getItem("name")) {
    window.location.href = "/home";
  }
};
