//take the input with the id of "name" from the index.html file.
  const userInput = document.getElementById("name");
  const btn = document.getElementById("btn");
  const divForAppend = document.getElementById("appendName");

  btn.addEventListener("click", () => {
    const userName = userInput.value.trim();
    if (userName !== "") {
      const p = document.createElement("p");
      p.className = "name";
      localStorage.setItem("name", userName);
      p.innerText = userName;
      divForAppend.appendChild(p);
      userInput.value = "";
    }
  });

  window.onload = function() {
    if (localStorage.getItem("name")) {
      window.location.href = "/home";
    }
  };