/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node parenthesesStack.js
* @description  : To perform Balanced Parentheses
* @Purpose      :  Balanced Parentheses
* @file         : parenthesesStack
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 19-oct-2019
*
*********************************************************************/

const refernce=require('../../Data Structure/stackBalancedParentheses/parenthesesStackBL')

var sc=require('readline-sync');
var str=sc.question("Enter the Expression");
var a=str.split(' ');
refernce.parenthese(a);
