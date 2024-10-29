const buttons = document.querySelectorAll(".button"); // gives nodeList of all buttons
const body = document.querySelector("body");

buttons.forEach(function (button) {
  // go to all buttons
  //   console.log(button);
  button.addEventListener("click", function (e) {
    // added an event listener to notice click
    // console.log(e); // gives details about the event
    // console.log(e.target); // gives the button
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
