const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
   
    const id = e.target.id;
    if (id === "grey") {
      body.style.backgroundColor = id;
    } else if (id == "purple") {
      body.style.backgroundColor = id;
    } else if (id == "blue") {
      body.style.backgroundColor = id;
    } else if (id == "yellow") {
      body.style.backgroundColor = id;
    }
  });
});
