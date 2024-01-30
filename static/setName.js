//take the input with the id of "name" from the index.html file.
const userInput = document.getElementById("name");
const btn = document.getElementById("btn");
const invalid = document.querySelector(".invalid");

btn.addEventListener("click", (e) => {
  const userName = userInput.value.trim();
  if (userName !== "" && /^[a-zA-Z]+$/.test(userName)) {
    localStorage.setItem("name", userName);
  } else {
    e.preventDefault();
    invalid.style.display = "block";
    setTimeout(() => {
      invalid.style.display = "none";
    }, 3000);
  }
});

window.onload = function () {
  if (localStorage.getItem("name")) {
    window.location.href = "/home";
  }
};
