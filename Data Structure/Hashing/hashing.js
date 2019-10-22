const read = require('readline-sync');
const fs = require('fs');

const file = require('../../Utility/utility');
const linkedlist = require('../../Utility/linkedList');
var obj = [];
var a = [];
for (let i = 0; i <= 10; i++) {
    obj[i] = new linkedlist.LinkedList();
}

let file1 = fs.readFileSync('file.txt');
let b = file1.toString();
let s1 = b.split(" ");
console.log("s1",s1);
s1.forEach(element => {
    var key = parseInt(element % 11);
    obj[key].insert(element);
});

obj.forEach((element) => {
    console.log(element.disp());
});

var number = read.question('enter number to search');
var key1 = parseInt(number % 11);
if (obj[key1].search(number)) obj[key1].deleteAtEnd(number);
else obj[key1].insertAtEnd(number);
obj.forEach((element) => {
    a = a.concat(element.show());
});
console.log(a);
file.writeFile('../files/write.txt', a);