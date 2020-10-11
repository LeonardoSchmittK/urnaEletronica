let dir = "/src/images/";
const candidates = [
  {
    name: "Zé Pereira",
    poliParty: "PT",
    number: 13,
    image: `${dir}Zé Pereira.png`,
  },
  {
    name: "Alexander Olivera",
    poliParty: "PSOL",
    number: 50,
    image: `${dir}Alexander Olivera.png`,
  },
  {
    name: "Luiza Seberar",
    poliParty: "PSL",
    number: 43,
    image: `${dir}Luiza Seberar.png`,
  },
  {
    name: "Alberto Roberto",
    poliParty: "NOVO",
    number: 16,
    image: `${dir}Alberto Roberto.png`,
  },
  {
    name: "Eliza Souza",
    poliParty: "REDE",
    number: 40,
    image: `${dir}Eliza Souza.png`,
  },
  {
    name: "Suzana Cabral",
    poliParty: "DEM",
    number: 55,
    image: `${dir}Suzana Cabral.png`,
  },
];

let keyboard = window.document.querySelector(".box__keyboard");
let name = window.document.querySelector(".screen__name");
let politicParty = window.document.querySelector(".screen__politicParty");
let image = window.document.querySelector(".screen__image");

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

const viewNumber = window.document.querySelector(".screen__viewNumber");
const btns = window.document.getElementsByClassName("keyboard__button");

for (let i = 0; i < btns.length; ++i) {
  btns[i].addEventListener("click", () => {
    const res = Number((viewNumber.value += btns[i].getAttribute("data-num")));
    validateNumber(res);
  });
}

function validateNumber(res) {
  for (let i = 0; i < candidates.length; ++i) {
    if (res === candidates[i].number) {
      name.innerHTML = candidates[i].name;
      politicParty.innerHTML = candidates[i].poliParty;
      image.style.display = "block";
      image.setAttribute("src", candidates[i].image);
      window.document
        .querySelector(".keyboard__button--confirm")
        .addEventListener("click", () => confirmNumber());
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
}

function confirmNumber() {
  reset();
  viewNumber.value = "FIM";
  disableButtons(true);
  window.setTimeout(() => window.location.reload(), 1000);
}
