"use strict";
exports.__esModule = true;
var deck = new Array();
function deckOfCard(suits, values) {
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            //var card={value:values[j],suit:suits[i]};
            deck.push(values[j] + " " + suits[i]);
        }
    }
    return (deck);
}
exports.deckOfCard = deckOfCard;
exports["default"] = deckOfCard;
