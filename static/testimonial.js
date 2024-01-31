const inputFeedback = document.getElementById("textArea");
const inputName = document.getElementById("userName");
const submitBtn = document.getElementById("submitBtn");
const parentContainer = document.getElementById("parent");
const invalidName = document.querySelector(".invalidName");
const invalidFeedback = document.querySelector(".invalidFeedback");

// testimony
function  addTestimony() {
  const nameValue = inputName.value.trim();
  const feedback = inputFeedback.value.trim();
  if (nameValue.length > 2 && feedback.length > 9) {
    const testimonyParent = document.createElement("div");
    const testimonyCard = document.createElement("div");
    const names = document.createElement("h5");
    const textFeedback = document.createElement("p");
    testimonyParent.className = "col-md-4 col-sm-12 my-1";
    testimonyCard.className = "card p-2 text-center";
    let number = localStorage.length + 1;
    // store data to local storage
    localStorage.setItem(
      "data" + number,
      JSON.stringify({ name: nameValue, feedback: feedback })
    );
    names.innerText = "-" + nameValue;
    textFeedback.innerText = feedback;
    testimonyCard.append(textFeedback, names);
    testimonyParent.appendChild(testimonyCard);
    parentContainer.appendChild(testimonyParent);
    inputName.value = "";
    inputFeedback.value = "";
  } else {
    if (!nameValue || nameValue.length  <= 2) {
      invalidName.style.display = "block";
    }
    setTimeout(() => {
      invalidName.style.display = "none";
    }, 5000);
    if (!feedback  || feedback.length <= 9) {
      invalidFeedback.style.display = "block";
    }
    setTimeout(() => {
      invalidFeedback.style.display = "none";
    }, 5000);
  }
}

submitBtn.addEventListener("click", addTestimony);

//displaying the the feedback in the testimony page
function displayTestimony(){
  for (let index = 0; index < localStorage.length; index++) {
    const testimonyParent = document.createElement("div");
    const testimonyCard = document.createElement("div");
    const names = document.createElement("h5");
    const textFeedback = document.createElement("p");
    testimonyParent.className = "col-md-4 col-sm-12 my-1";
    testimonyCard.className = "card p-2 text-center";
    let key = localStorage.key(index);
    if (key != "name") {
      const item = JSON.parse(localStorage.getItem(key));
      textFeedback.innerText = item.feedback;
      names.innerText = "-" + item.name;
      testimonyCard.append(textFeedback, names);
      testimonyParent.appendChild(testimonyCard);
      parentContainer.appendChild(testimonyParent);
    }
  }
}

displayTestimony();

