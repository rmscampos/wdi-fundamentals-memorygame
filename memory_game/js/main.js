const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkforMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} 	else {
  console.log("Sorry, try again.");
};
};
function flipCard (cardId) {
	if (cardsInPlay.length === 2) {
	alert("You found a match!");
} 	else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} 	else {
	alert("Sorry, try again.")
};
console.log("User flipped" + [cardID]);
checkForMatch();
};

cardsInPlay.push('cards[cardId]');
flipCard(0);
flipCard(2);
var cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped king");
