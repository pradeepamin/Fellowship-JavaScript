/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node orderedLinkedList.js
* @description  : Using linked list, save data in ordered List
* @Purpose      : OrderedLinked List
* @function     : Utility/linkedList
* @file         : orderedLinkedList
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/

let sc = require('readline-sync');
const ls = require('../../Utility/linkedList');
const util = require('../../Utility/utility');
var data = util.fileCall('file.txt');


var linklist = new ls.LinkedList();

data.forEach(element => {
    linklist.sortedInsert(parseInt(element));
});

var display = linklist.show();
console.log(display.join(' '));

util.writeFile('file.txt', display)

let find = sc.question("enter the number you want check");
var check = linklist.search(find);
if (check) {
    linklist.removeElement(find);
}
else {
    linklist.sortedInsert(find);
}
//linkedList.sortedInsert();
var display = linklist.show();
console.log(display.join(' '));

util.writeFile('file.txt', display)
