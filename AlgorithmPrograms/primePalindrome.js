/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node primePalindrome.js
* @description  : Prime numbers with given range and check for plaindrome in it.
* @Purpose      : To print N Prime number and display palindrome
* @function     : Utility/utility
* @file         : primePalindrome
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
const Impt = require('../Utility/utility')
let sc = require('readline-sync');
let alist = [];
for (let i = 0; i < 500; i++) {
    //check for whether number is prime or not. If prime than add into the array.
    if (Impt.checkPrimeNumber(i)) {
        alist.push(i);
    }
}
console.log(alist.join(','));
//return the palindorme numbers
var palindromeResult = Impt.checkPrimePalindrome(alist);
console.log(palindromeResult.join(','));

