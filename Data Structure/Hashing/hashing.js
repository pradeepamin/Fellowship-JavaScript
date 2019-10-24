/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node hashing.js
* @description  : hashing function to store the key element
* @Purpose      : hashing to store the value 
* @file         : hashing
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 23-oct-2019
*
*********************************************************************/

const read = require('readline-sync');
const fs = require('fs');

const file = require('../../Utility/utility');

const linkedlist = require('../../Utility/linkedList');

var obj = [];
var a = [];
//create the 10 slot to store the key value
for (let i = 0; i <= 10; i++) {
    obj[i] = new linkedlist.LinkedList();
}

let file1 = fs.readFileSync('file.txt'); //used to accept the input from file
let b = file1.toString();
let s1 = b.split(" ");
console.log("s1", s1);
s1.forEach(element => {
    var key = parseInt(element % 11);
    obj[key].insert(element);
});

obj.forEach((element) => {
    console.log(element.show());
});

var number = read.question('enter number to search');  //search the element from file and add if not found delete if found
var key1 = parseInt(number % 11);
if (obj[key1].search(number)) 
obj[key1].removeElement(number);
else 
obj[key1].insertEnd(number);

obj.forEach((element) => {
    a = a.concat(element.show());
});
console.log(a);
file.writeFile('file.txt', a);