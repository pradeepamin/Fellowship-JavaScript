const refernce=require('../../Data Structure/stackBalancedParentheses/parenthesesStackBL')

var sc=require('readline-sync');
var str=sc.question("Enter the Expression");
var a=str.split(' ');
refernce.parenthese(a);
