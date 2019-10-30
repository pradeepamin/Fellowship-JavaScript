const fs = require('fs');
module.exports = class Inventory {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    //parse the json files 
    jsonParse(fileName) {
        this.fileName = fileName;
       
        this.content = JSON.parse(fs.readFileSync(fileName));
       

    }
    //used to display
    disp() {
        this.content.Stock.forEach(element => {
            console.log(element);
        });
    }
    /*
     * @description : value
     * @purpose:   it calculate value of inventory
     * @param {data}, which has data information. 
     */
    value() {
        var sum1 = 0;
        this.content.Stock.forEach(element => {
            sum1 = sum1 + element.price * element.numberofshares

        });
        this.content.Stock.forEach(element => {
            console.log(element.name + '  is rs  ' + element.price * element.numberofshares);
        });
       
        console.log('Total value of stocks ' + sum1 + "rs");
    }
}