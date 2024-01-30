const div = document.getElementById("appendName");

// take a username from a user in the index.html file and display it in the testimonial and about pages
const uName = localStorage.getItem("name");
const span = document.createElement("span");
span.className = "name";
span.innerText = uName;
div.appendChild(span);
