/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node Anagram.js
* @description  : Anagram Detection
* @Purpose      : To find two string are equal or not
* @function     : Utility/utility
* @file         : Anagram.js
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
const Impt=require('../Utility/utility')
let sc=require('readline-sync');
let str1=sc.question("Enter the chatacter 1 to check for Anagram");
let str2=sc.question("Enter the chatacter 2 to check for Anagram");
let res=Impt.checkAnagram(str1,str2);
console.log(res);
