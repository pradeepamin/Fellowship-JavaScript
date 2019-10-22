/*
* @description : vending machine to count number of notes
* @param {int}, which has data information
* @return {data}, returning note counts
*/
exports.vendingMachine = (amount) => {
    try {
        var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
        var counts = [];
        for (let i = 0; i < 8; i++) {
            if (amount => notes[i]) {

                counts[i] = parseInt(amount / notes[i]);
                amount = parseInt(amount - notes[i] * counts[i]);
            }
        }
        console.log("Currency Count ->");
        for (let i = 0; i < 9; i++) {
            if (counts[i] != 0) {
                console.log(notes[i] + " : "
                    + counts[i]);
            }
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
