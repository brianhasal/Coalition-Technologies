

const acButton = document.querySelectorAll(".btn");

for(let i = 0; i < acButton.length; i++) {
  acButton[i].addEventListener("click", () => {
    if (acButton[i].style.backgroundColor !== "white") {
      acButton.forEach(button => {
        button.style.backgroundColor = "rgb(99, 109, 129)";
      })
      acButton[i].style.backgroundColor = "white";

    };
  })
};






// function active2Button() {
//   buttonID.style.color = "white";
// }

// function active3Button() {
//   buttonID.style.color = "white";
// }
