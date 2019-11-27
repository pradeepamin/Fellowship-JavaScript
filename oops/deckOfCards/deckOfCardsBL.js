var deck = new Array();
/*
 * @description :  deckOfCard
 * @purpose:   it accepts suits and values and creating deck of cards using array
 * @param {data}, which has data information. 
 */
module.exports.deckOfCard = (suits, values) => {

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            //var card={value:values[j],suit:suits[i]};
            // console.log("values[j]",values[j])
            deck.push(values[j] + " " + suits[i]);
        }
    }
    return (deck);
}
/*
 * @description : shuffle
 * @purpose:   it shuffles deck of cards using sort and random .
 * @param {data}, which has data information. 
 */
module.exports.shuffle = () => {
    
    deck.sort(() => Math.random());
    console.log("aLL",deck);

}