let player = {
    name: "Alvis",
    chips: 145
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
//querySelector is broader than getElementById, so we need the . to specify class
let cardsEl = document.querySelector("#cards-el");
let playerEl = document. getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let number = Math.floor(Math.random() * 13 + 1);
    switch (number){
        case 1:
            return 11;
        case 11:
            return 10;
        case 12:
            return 10;
        case 13:
            return 10;
        default:
            return number;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard); //opposite is pop, use shift() and unshift() to edit the first element
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You've got a BlackJack!";
        hasBlackJack = true;
    }
    else {
        message = "You are out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
    
}
