/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node binarySearchInteger.js
* @description  : BinarySearch method for integer
* @Purpose      : To search given number 
* @function     : Utility/utility
* @file         : binarySearchInteger
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/

const Impt = require('../Utility/utility')
let sc = require('readline-sync');
let input = [2, 3, 4, 5, 6, 1, 89, 87, 98];
let key = sc.question("Enter the Number you want to search\n");
let arr = input.sort();
console.log(arr.join(','));
var result = Impt.binarySearchInt(arr, key);
console.log(result);
if (result == -1) {
    console.log("Not found");
}
else {
    console.log("The Element" + key + "found at" + result);
}
