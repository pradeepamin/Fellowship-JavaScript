

/********************************************************************
* @Execution    : Desktop/Pradeep/FelloshipJavaScript/oops/sharesLinkedList
* @description  : this program is to read in Stock Names, Number of Share, Share Price. 
                 addshares and delete using linkedlist
* @overview     : oops concepts
* @file         : sharesLinkedList
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 28-oct-2019
*
*********************************************************************/

const fs = require('fs');
var refernce1 = require('../sharesLinkedList/shareLinkedListBLL');
var read = require('readline-sync');
var obj = new refernce1();
var data = fs.readFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/sharesLinkedList/read.json')
var content = JSON.parse(data);

let content1 = [];
let choice = read.question("Enter (1) to add new company or Enter (2) to remove company\n");
if (choice == 1) {
    var company = read.question("Enter the new company name\n");
    var numberofshares = read.question("Enter the Number of shares\n");
    var noshares = Number(numberofshares);
    var shareprice = read.question("Enter the share price\n");
    var price = Number(shareprice);

    //converting an json data to the linked list
    content.forEach(element => {
        obj.firstAdd(element);
    });

    obj.firstAdd(company, noshares, price);

    obj.getArray.forEach(ele => {
        content1.push(ele);
    })
    console.log(content1);

    fs.writeFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/sharesLinkedList/read.json', JSON.stringify(content1));

    console.log("final content", content);
}
else if (choice == 2) {
    console.log(content1);
    var deleteCompnay = read.question("Enter the company you want to delete\n");
    obj.lastDelete(deleteCompnay);
    obj.getArray.forEach(ele => {
        console.log("name=" + ele.name, "shares=" + ele.shares, "price=" + ele.price)
    })
    console.log(obj)

    fs.writeFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/sharesLinkedList/write.json', JSON.stringify(content1));
} else {
    console.log("Invaild input");
}
