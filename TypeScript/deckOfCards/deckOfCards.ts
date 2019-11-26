/********************************************************************
* @Execution    : /Desktop/Pradeep/FelloshipJavaScript/TypeScript/deckOfCards$ node deckOfCards.js
* @description  :create deck of cards and insert in 2d array then shuffle it then distribute 9 cards from
                 deck to 4 people then display  cards
* @overview     : TypeScript 
* @file         : deckOfCards
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : 2.7.2
* @since        : 25-Nov-2019
*
*********************************************************************/

declare var require: any
const reference = require('./deckOfCardsBL');
var suits = ['♣︎', '♦', '♥︎', '♠︎'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deck = reference.deckOfCard(suits, values);
deck.sort(() => Math.random());
console.log("all", deck);
var arr: any[][] = new Array()
var k = 0;
for (let i = 0; i < 4; i++) {

    for (let j = 0; j < 9; j++) {
        arr.push(deck[k])
        k = k + 1;
    }
}
console.log(arr);



