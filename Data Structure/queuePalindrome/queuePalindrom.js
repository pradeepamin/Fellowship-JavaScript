/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node queuePalindrome.js
* @description  : Palindrome-Checker
* @Purpose      : check given string is plainddome or not
* @file         : Palindrome
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 22-oct-2019
*
*********************************************************************/
const reference=require('../../Data Structure//queuePalindrome/queuePalindromeBL')
const sc=require('readline-sync');
let palindrome=sc.question("Enter the string to check for palindrome\n");

reference.checkpalindrome(palindrome);