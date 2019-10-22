/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node binarySearchString.js
* @description  : BinarySearch method for string
* @Purpose      : To search given string 
* @function     : Utility/utility
* @file         : binarySearchString
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
// to  find start of execution
var d = new Date();
let start = d.getMilliseconds();
const Impt = require('../Utility/utility')
let sc = require('readline-sync');
let input = ["pradeep", "amin", "apple", "pen", "xyz", "udupi"];
var arr = input.sort();
console.log(arr);
let key = sc.question("Enter the string you want to search\n");
Impt.binarySearchString(arr, key);
//to find end of execution
let end = d.getMilliseconds();
console.log("Time is taken by to program in milli seconds " + (end - start));
