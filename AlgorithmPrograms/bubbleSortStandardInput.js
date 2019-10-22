/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node bubbleSortStandardInput.js
* @description  : bubble sorting method for string use standard input 
* @Purpose      : to sort given string 
* @function     : Utility/utility
* @file         : bubbleSortStandardInput
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
const Impt=require('../Utility/utility')
let sc=require('readline-sync');
let n=sc.question("Enter the number of character to be sorted\n");
let arr=[];
for(let i=0;i<n;i++)
{
    
    let a=sc.question();
    arr.push(a)
}
console.log("Entered element are-\n"+arr.join(' '));
Impt.checkBubbleString(arr);