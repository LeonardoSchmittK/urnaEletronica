const dir = "/src/images/";
const numbers = ["13","50","43","16","40","55"];
const candidates = [
  {
    name: "Zé Pereira",
    poliParty: "PT",
    number: "13",
    image: `${dir}Zé Pereira.png`,
  },
  {
    name: "Alexander Olivera",
    poliParty: "PSOL",
    number: "50",
    image: `${dir}Alexander Olivera.png`,
  },
  {
    name: "Luiza Seberar",
    poliParty: "PSL",
    number: "43",
    image: `${dir}Luiza Seberar.png`,
  },
  {
    name: "Alberto Roberto",
    poliParty: "NOVO",
    number: "16",
    image: `${dir}Alberto Roberto.png`,
  },
  {
    name: "Eliza Souza",
    poliParty: "REDE",
    number: "40",
    image: `${dir}Eliza Souza.png`,
  },
  {
    name: "Suzana Cabral",
    poliParty: "DEM",
    number: "55",
    image: `${dir}Suzana Cabral.png`,
  },
];

const keyboard = window.document.querySelector(".box__keyboard");
const name = window.document.querySelector(".screen__name");
const politicParty = window.document.querySelector(".screen__politicParty");
const image = window.document.querySelector(".screen__image");
const viewNumber = window.document.querySelector(".screen__viewNumber");
const btns = window.document.getElementsByClassName("keyboard__button");

function addButtons() {
  let i = 0;
  while (i < 10) {
    let button = document.createElement("button");
    button.className = `keyboard__button button__${i}`;
    button.innerText = i;
    button.setAttribute("data-num", i);
    keyboard.appendChild(button);
    ++i;
  }
}

addButtons();

for (let i = 0; i < btns.length; ++i) {
  btns[i].addEventListener("click", () => {
    const res = (viewNumber.value += btns[i].getAttribute("data-num"));
    if (res.length >= 2) disableButtons(true);
    validateNumber(res);
  });
}

function validateNumber(res) {
  for (let i = 0; i < numbers.length; ++i) {
    if (res === numbers[i]) {
      name.innerHTML = candidates[i].name;
      politicParty.innerHTML = candidates[i].poliParty;
      image.style.display = "block";
      image.setAttribute("src", candidates[i].image);
      window.document
        .querySelector(".keyboard__button--confirm")
        .addEventListener("click", () => confirmNumber(res));
    }    
  }
}

function disableButtons(type) {
  switch (type) {
    case true:
      for (let i = 0; i < btns.length; ++i) {
        btns[i].disabled = true;
      }
      break;
    case false:
      for (let i = 0; i < btns.length; ++i) {
        btns[i].disabled = false;
      }
  }
}

function makeAbstention() {
  if (viewNumber.value.length < 1) {
    viewNumber.value = "BRANCO ";
    disableButtons(true);
    window.document
      .querySelector(".keyboard__button--confirm")
      .addEventListener("click", () => confirmNumber());
  }
}

function reset() {
  viewNumber.value = null;
  name.innerHTML = null;
  politicParty.innerHTML = null;
  image.style.display = "none";
  disableButtons(false);
  validateNumber(viewNumber.value)
}

function confirmNumber(res) {
  if(viewNumber.value === res || viewNumber.value=== "BRANCO "){
  reset();
  disableButtons(true);
  viewNumber.value = "FIM";
  window.setTimeout(() => window.location.reload(), 300);
  console.log(res)
  }
}
