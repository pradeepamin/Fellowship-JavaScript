/********************************************************************
* @Execution    : /Desktop/Pradeep/FelloshipJavaScript/TypeScript/adressBook$ 
* @description  : Address Book
* @overview     : TypeScript 
* @file         : tsc personBook.ts, tsc personBookBL.ts, node personBookjs
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : 2.7.2
* @since        : 25-Nov-2019
*
*********************************************************************/

//  import { AddressBook } from './personBookBL'; 
var input = require('readline-sync');
var file = require('fs');
var Model = require('../../TypeScript/adressBook/personBookBL');
function readJson() {
    return file.readFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/TypeScript/adressBook/book.json', 'utf8');
}
var data1 = readJson();
var object = new Model.AddressBook();
function address(data1) {
    console.log("Enter 1- for add person information");
    console.log("Enter 2- for update person information");
    console.log("Enter 3- for remove person information");
    console.log("Enter 4- for sort the addressbook based on ZIP");
    console.log("Enter 5- for sort the addressbook based on firstname");
    console.log("Enter 6- for Print all addressbook information");
    console.log("Enter 7- to exit");
    var num = input.questionInt("Select  any number:");
    var data = JSON.parse(data1);
    switch (num) {
        case 1:
            object.addPerson(data);
            address(data1);
            break;
        case 2:
            object.updatePerson(data);
            break;
        case 3:
            object.removeperson(data);
            break;
        case 4:
            object.sortzip(data);
            break;
        case 5:
            object.sortfname(data);
            break;
        case 6:
            object.printadd(data);
            break;
        case 7:
            console.log("\n out of application");
            break;
        default:
            console.log("Wrong input");
            return address(data);
    }
}
address(data1);
