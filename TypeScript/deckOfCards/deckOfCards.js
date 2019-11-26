var reference = require('./deckOfCardsBL');
var suits = ['♣︎', '♦', '♥︎', '♠︎'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deck = reference.deckOfCard(suits, values);
deck.sort(function () { return Math.random(); });
console.log("all", deck);
// var arr:any[][] = [] 
var arr = new Array();
var k = 0;
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 9; j++) {
        arr.push(deck[k]);
        k = k + 1;
    }
    console.log(arr);
}
console.log("\n");
