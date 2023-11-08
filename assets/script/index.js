'user strict'

function onEvent(event, selector, callback){
    return selector.addEventListener(event,callback);
}

function select(selector,parent = document){
    return parent.querySelector(selector);
}

function selectById(selector,parent = document){
    return parent.getElementById(selector);
}

function selectAll(selector,parent = document){
    return [...parent.querySelectorAll(selector)];
}

function create(element,parent=document){
    return parent.createElement(element);
}

const btnStart = select('.btn-start');
const gameBoard = select('.game-board');
const number = select('.number');
const eleCount = selectById('count');
const output = select('.output');
const btnPlay = select('.btn-play');
var secreteNumber = 0;
var count = 0;

onEvent('click', btnStart, () => {
    btnStart.style.display = 'none';
    gameBoard.style.visibility = 'visible';
    setNewGame();
});

onEvent('click', btnPlay, () => {
    setNewGame();
});

onEvent('keyup', number, (event) => {
    if(event.key == 'Enter') {
        //console.log(event.target.value);
        console.log(secreteNumber);
        if(count<=0) {
            output.innerText = 'You ran out of times.';
        }
        if(event.target.value > secreteNumber){
            output.innerText = 'Your input number is biger.';
        } else if (event.target.value < secreteNumber){
            output.innerText = 'Your input number is smaller.';
        } else {
            output.innerText = 'You win!';
        }
        count -= 1;
        eleCount.innerText = count;
        if (count == 1){
            eleCount.style.color = 'red';
        }
    }
});

function setNewGame(){
    count = 5;
    secreteNumber = (Math.random() * 100).toFixed(0);
    eleCount.innerText = count;
    output.innerText = '';
    number.value = '';
}