try{

const read = require('readline-sync');

//var abc=require('../../Utility/linkedList');

var abc=require('./unOrderedLinkedListBL');
var util = require('../../Utility/utility');

var file=util.fileCall('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/Files/read.txt');

var file1=file.join(' ');
console.log(file1);

abc.unorderedlist(file1);








}catch(e){
console.log(e.message);
console.log(e.name);
}

