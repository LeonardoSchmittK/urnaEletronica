const candidates = [
  {
    name: "Zé Pereira",
    poliParty: "PT",
    number: 13,
  },
  {
    name: "Alexander Olivera",
    poliParty: "PSOL",
    number: 50,
  },
  {
    name: "Luiza Seberar",
    poliParty: "PSL",
    number: 43,
  },
  {
    name: "Alberto Roberto",
    poliParty: "NOVO",
    number: 16,
  },
  {
    name: "Elisa Souza",
    poliParty: "REDE",
    number: 40,
  },
  {
    name: "Pedro Lopes",
    poliParty: "PCdoB",
    number: 35,
  },
  {
    name: "Suzana Cabral",
    poliParty: "DEM",
    number: 55,
  },
];

let keyboard = window.document.querySelector(".box__keyboard");
let name = window.document.querySelector(".screen__name");
let politicParty = window.document.querySelector(".screen__politicParty");

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
      
    }
  }
}

function makeAbstention() {
  if (viewNumber.value.length < 1) {
    viewNumber.value = "BRANCO ";
    
      for(let i = 0;i<btns.length;++i){
        btns[i].disabled = true
      }
  }
  
}

function reset() {
  viewNumber.value = null;
  name.innerHTML = null;
  politicParty.innerHTML = null;

  for(let i = 0;i<btns.length;++i){
    btns[i].disabled = false
  }

}


function confirmNumber(type){
  if( type === true ) {
    viewNumber.value = 'FIM'
  }
}