/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node fileBinarySearchString.js
* @description  : BinarySearch method for string
* @Purpose      : To search given string
* @function     : Utility/utility 
* @file         : fileBinarySearchString
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
//instal ~$ npm i fs

const fs = require('fs');
const Impt=require('../Utility/utility')
const sc=require('readline-sync');
text = fs.readFileSync('../Files/binaryText.txt');
let input = text.toString().split(' ');
let arr=input.sort();
console.log(arr);
let key=sc.question("Enter the name to be searched\n");
Impt.binarySearchString(arr,key);



