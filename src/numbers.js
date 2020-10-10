let keyboard = window.document.querySelector(".box__keyboard");

function addButtons() {
  let i = 0
  while(i<10){
    let button = document.createElement('button');
    button.className = `keyboard__button button__${i}`;
    button.innerText = i;
    button.setAttribute('data-num',i)
    keyboard.appendChild(button);
    ++i
  };
};

addButtons();

const viewNumber = window.document.querySelector('.screen__viewNumber');
const btns = window.document.getElementsByClassName('keyboard__button');

for(let i = 0;i<btns.length;++i){
  btns[i].addEventListener('click',()=>{
    viewNumber.value += btns[i].getAttribute('data-num');
    
  })

}

function reset(){
 viewNumber.value = null

}