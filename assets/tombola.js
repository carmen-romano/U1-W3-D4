const button = document.getElementById("button-table");
let divEstrazione = document.getElementById("estrazione");

const generateTable = () => {
  let containerTable = document.getElementById("tombola");
  for (let i = 1; i < 91; i++) {
    let number = document.createElement("div");
    number.className = "number";
    number.innerText = i;
    containerTable.appendChild(number);
  }
};

button.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 90) + 1;
  let randomDiv = document.createElement("div");
  randomDiv.className = "numeriEstratti";
  let randomP = document.createElement("p");
  randomP.innerText = randomNumber;
  randomDiv.appendChild(randomP);
  divEstrazione.appendChild(randomDiv);

  let numbers = document.querySelectorAll(".number");
  numbers.forEach((number) => {
    if (parseInt(number.innerText) === randomNumber) {
      number.classList.add("numeroEstratto");
    }
  });
});

window.onload = () => {
  generateTable();
};
