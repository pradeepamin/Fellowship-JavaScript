var reference=require('../prime2D/primeBL')
//this line is used for user input 
var input=require('readline-sync');
//this line is used for user waiting
var n=input.questionInt("enter the num between(0-1000): ");
//this is function cal
reference.primeTwoD(n);