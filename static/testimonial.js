const textArea = document.getElementById("textArea");
const userInput = document.getElementById("userName");
const submitBtn = document.getElementById("submitBtn");
const parent = document.getElementById("parent");

// testimony
submitBtn.addEventListener("click", () => {
  const nameValue = userInput.value.trim();
  const feedBack = textArea.value.trim();
  if (nameValue != "" && feedBack != "") {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    div.className = "col-md-4 col-sm-12 my-1";
    div2.className = "card p-2 text-center";
    let random = (Math.random() * 10000).toFixed();
    // store data to local storage
    localStorage.setItem(
       "data" + random ,
      JSON.stringify({ name: nameValue, feedback: feedBack })
    );
    h5.innerText = "-" + nameValue;
    p.innerText = feedBack;
    div2.append(p, h5);
    div.appendChild(div2);
    parent.appendChild(div);
  }else{alert('please provide your name and feedback ')}
  userInput.value = "";
  textArea.value = "";
});

//displaying the the feedback in the testimony page 
for (let i = 0; i < localStorage.length; i++) {
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const h5 = document.createElement("h5");
  const p = document.createElement("p");
  div.className = "col-md-4 col-sm-12 my-1";
  div2.className = "card p-2 text-center";
  let key = localStorage.key(i);
  if (key != "name") {
    const item = JSON.parse(localStorage.getItem(key));
    p.innerText = item.feedback;
    h5.innerText = "-" + item.name;
    div2.append(p, h5);
    div.appendChild(div2);
    parent.appendChild(div);
  }
}
