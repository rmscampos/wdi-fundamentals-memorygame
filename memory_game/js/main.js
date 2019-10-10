<<<<<<< HEAD
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImages: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImages: 'images/king-of-diamonds.png'
}
];
=======
const cards = ["queen", "queen", "king", "king"];
>>>>>>> c087a1e82406f5da24d5d92e9e2d67cd09a2c213
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
<<<<<<< HEAD
console.log("User flipped" + cards[cardsId].rank);
checkForMatch();
};

cardsInPlay.push(cards[cardId].rank);
=======
console.log("User flipped" + [cardID]);
checkForMatch();
};

cardsInPlay.push('cards[cardId]');
>>>>>>> c087a1e82406f5da24d5d92e9e2d67cd09a2c213
flipCard(0);
flipCard(2);
var cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped king");
<<<<<<< HEAD
console.log('cardImage');
console.log('suit');

=======
>>>>>>> c087a1e82406f5da24d5d92e9e2d67cd09a2c213
