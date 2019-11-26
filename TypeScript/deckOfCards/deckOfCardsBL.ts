

var deck:any[] = new Array()  

export function deckOfCard(suits,values){
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            //var card={value:values[j],suit:suits[i]};
            deck.push(values[j] + " " + suits[i]);
        }
    }
    return (deck);
}


export default deckOfCard;

