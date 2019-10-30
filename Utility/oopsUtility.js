/*---------------------------------------------------------------------------------------------------------------- */
/* @description : inventory data management
     * @purpose:   to calculate the inventory items
     * @param {data}, which has data information. 
     */
exports.inventoryObj = (data) => {
    // console.log(data);
    var rice = data.rice;
    var wheat = data.wheat;
    var pulse = data.pulse;
    var valueRice = 0, valueWheat = 0, valuePulse = 0;
    // console.log(rice);

    for (let key in rice) {
        var amount = rice[key].weight * rice[key].price;
        console.log("cost of " + rice[key].name + " is:" + amount + "Rs\n");
        valueRice = valueRice + amount
    }
    console.log("Total value of Rice--:" + valueRice + "Rs\n");

    for (let key in wheat) {
        var amount = wheat[key].weight * wheat[key].price;
        console.log("Cost of " + wheat[key].name + " is " + amount + "Rs\n");
        valueWheat = valueWheat + amount;
    }
    console.log("Total value of wheat==:" + valueWheat + "Rs\n");

    for (let key in pulse) {
        var amount = pulse[key].weight * pulse[key].price;
        console.log("Cost of " + pulse[key].name + " is " + amount + "Rs\n");
        valuePulse = valuePulse + amount;
    }
    console.log("Total value of Pulse==:" + valuePulse + "Rs\n");
}


/*------------------------------------------------------------------------------------------------------------ */

     /* @description : regularExpression
     * @purpose:   To change with given user input
     * @param {data}, which has data information. 
     */

exports.regularExp = (name, fullName, mobileNumber) => {
    var read = require('readline-sync');
    var pattern = /[a-zA-Z]/;
    var mobNumbers = /^[0-9]+$/;
    while (!pattern.test(name) || !pattern.test(fullName)) {
        name = read.question("Enter your name(apl only");
        fullname = read.question("Enter your full name(alp only:");

    }
    
    while (!mobNumbers.test(mobileNumber) || mobileNumber.length != 10) {
        mobileNumber = read.question("enter vaild phone number(10 Digits pnly");
    }
    var file=require('fs');
    var line=file.readFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/RegularExpression/regularString.txt','utf8');

    var date=new Date();
    let date1=date.toDateString();
    console.log(date);
    line=line.replace(/<<name>>/,name);
    line=line.replace(/<<full name>>/,fullName);
    line=line.replace(/xxxxxxxxxx/g,mobileNumber);
     line=line.replace(/10-01-2019/g,date1);
    return line;

}
/*------------------------------------------------------------------------------------------------------------ */

