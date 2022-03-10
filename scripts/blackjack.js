console.log("blackjack");

//card object
var card = {
    suit: null,
    value: null
}

//card array
let values = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
let suits = ['h','d','s','c'];

let newGame = document.getElementById("start");
newGame.addEventListener("click", start);
newGame.style.display = 'block';

let betbtn = document.getElementById('bet');
betbtn.addEventListener("click", placeBet);

let bettxt = document.getElementById("betamt");
bettxt.innerHTML = "Current bet: 0";

let wallettxt = document.getElementById("wallet");
wallettxt.innerHTML = "Wallet: 1000";

let count = 0;
let betamt = 0;
let wallet = 1000;

function placeBet(){
    count++;
    betamt = count * 100;
    wallet -= 100;

    if(wallet < 0){
        betamt = 1000;
        wallet = 0;
    }

    bettxt.innerHTML = "Current bet: " + betamt;
    wallettxt.innerHTML = "Wallet: " + wallet;
}

let dealer = document.getElementById("dealer");
let player = document.getElementById("player");

let gameBoard = document.getElementById("gameBoard");

function start(){
    dCard();
    dCard();
    pCard();
    pCard();
    newGame.style.display = 'none';
    gameBoard.style.display = 'block';
}

let suitImg = "";

function newCard(){
    let x = Math.floor(Math.random()*14);
    let y = Math.floor(Math.random()*4);

    card.value = values[x];
    card.suit = suits[y];
    
    if(card.suit == 'h'){
        suitImg = "imgs/heart.png";
    }else if(card.suit == 'd'){
        suitImg = "imgs/diamond.png";
    }else if(card.suit == 's'){
        suitImg = "imgs/spade.png'";
    }else{
        suitImg = "imgs/clover.png";
    }
}


function dCard(){
    newCard();
    dealer.innerHTML += "<div class=card><img id='simg' src='"+suitImg+"'/>"+card.value+"</div>";
    checkDealer();
}

function pCard(){
    newCard();
    player.innerHTML += "<div class=card><img id='simg' src='"+suitImg+"'/>"+card.value+"</div>";
    checkWin();
}

let dscore = 0;
let pscore = 0;

document.getElementById("dscore").innerHTML = "Dealer score: " + dscore;
document.getElementById("pscore").innerHTML = "Player score: " + pscore;

let winDiv = document.getElementById("win");
let modal = document.getElementById("modal");


function checkWin(){
    if(card.value === 'J' || card.value === 'K' || card.value === 'Q'){
        pscore += 10;
        document.getElementById("pscore").innerHTML = "Player score: " + pscore;
    }else if(card.value === 'A'){
        pscore += 1;
        document.getElementById("pscore").innerHTML = "Player score: " + pscore;
    }else if(0 < card.value < 11){
        pscore += card.value;
        document.getElementById("pscore").innerHTML = "Player score: " + pscore;
    }

    if(pscore == 21){
        modal.style.display = "flex";
        winDiv.innerHTML = "You Won!<button onClick='location.reload();'>Start Over</button>";
    }else if(pscore > 21){
        modal.style.display = "flex";
        winDiv.innerHTML = "Bust!<button onClick='location.reload();'>Start Over</button>"
    }
}

function checkDealer(){
    if(card.value === 'J' || card.value === 'K' || card.value === 'Q'){
        dscore += 10;
        document.getElementById("dscore").innerHTML = "Dealer score: " + dscore;
    }else if(card.value === 'A'){
        dscore += 1;
        document.getElementById("dscore").innerHTML = "Dealer score: " + dscore;
    }else if(0 < card.value < 11){
        dscore += card.value;
        document.getElementById("dscore").innerHTML = "Dealer score: " + dscore;
    }

    if(dscore == 21){
        modal.style.display = "flex";
        winDiv.innerHTML = "Dealer Win's!<button onClick='location.reload();'>Start Over</button>";
    }else if(dscore > 21){
        modal.style.display = "flex";
        winDiv.innerHTML = "Dealer Bust, You Win!<button onClick='location.reload();'>Start Over</button>"
    }
}

let nextPlay = document.getElementById("hit");
nextPlay.addEventListener("click", hit);

function hit(){
    if(newGame.style.display == "none"){
        pCard();
    }else{
        alert("Start Game first");
    }   
}

let stay = document.getElementById("stay");
stay.addEventListener("click", dealersTurn);

function dealersTurn(){
    if(newGame.style.display == "none"){
        while(dscore <= 21){
            dCard();
        }
    }else{
        alert("Start Game first");
    }  
}

