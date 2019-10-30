const read = require('readline-sync');


var file=require("fs");
var data=file.readFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/sharesLinkedList/shareLinkedList.json');
var object=JSON.parse(data);
//util.inventoryObj(object);
console.log(object);