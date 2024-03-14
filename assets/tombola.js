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

const random = function () {
  let randomNumber = Math.floor(Math.random() * 91);
  return randomNumber;
};
button.addEventListener("click", () => {
  let randomNumber = random();
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

  let cartellaGiocatore = document.querySelectorAll(".numeroGiocatore");
  cartellaGiocatore.forEach((cartella) => {
    if (parseInt(cartella.innerText) === randomNumber) {
      cartella.classList.add("numeroEstratto");
    }
  });
});

let containerCartelle = document.getElementById("containerCartelle");
let numeroCartelle = document.getElementById("numberInput");
btnNumeroCartelle.addEventListener("click", (e) => {
  containerCartelle.innerHTML = "";

  for (let i = 0; i < numeroCartelle.value; i++) {
    let divCartella = document.createElement("div");
    let cartellaH1 = document.createElement("h3");
    cartellaH1.innerText = "La tua cartella";
    divCartella.appendChild(cartellaH1);
    divCartella.className = "divCartella";
    for (let j = 0; j < 24; j++) {
      let randomNumber = random();
      let cartellaGiocatore = document.createElement("p");
      cartellaGiocatore.innerText = randomNumber;
      cartellaGiocatore.className = "numeroGiocatore";
      divCartella.appendChild(cartellaGiocatore);
      containerCartelle.appendChild(divCartella);
    }
  }
});
window.onload = () => {
  generateTable();
};
