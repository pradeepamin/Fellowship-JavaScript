var read=require('readline-sync');
var path=require('../../Utility/oopsUtility');
var name=read.question("Enter your name:\n");
var fullName=read.question("Enter your Full name:\n");
let mobileNumber=read.question("Enterb your phone Number\n");

let result=path.regularExp(name,fullName,mobileNumber);

console.log("\n"+result);