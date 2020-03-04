console.log("Up and running!");


let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];


function checkForMath(){
	if(cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
		}else{
			console.log("Sorry try again.");
			}
};

function flipCard(cardId){
	console.log("User flipped " + cards[cardId]); // IN CONSOLE: flipCard(0) = 'User flipped queen'; flipcard(2) = 'User flipped king';
	cardsInPlay.push(cards[cardId]); 			 // push cardId into cardsInPlay array
};


// Sequence
// console: flipCard(0) = 'User flipped queen'
// console: flipcard(2) = 'User flipped king'
// console: checkForMath() = "Sorry try again."

// console: flipCard(0) = 'User flipped queen'
// console: flipcard(1) = 'User flipped queen'
// console: checkForMath() = "You found a match." 








/*let cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped: " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push("cardTwo");
console.log("User flipped: " + cardTwo);

if(cardsInPlay.length === 2){
	if(cardOne === cardTwo){
		alert("You found a match!");
}else{
	alert("Sorry try again.");
	}
}*/