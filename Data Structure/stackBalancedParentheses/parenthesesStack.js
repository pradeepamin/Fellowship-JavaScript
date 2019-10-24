/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node parenthesesStack.js
* @description  : To perform Balanced Parentheses
* @Purpose      : Balanced Parentheses
* @file         : parenthesesStack
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 19-oct-2019
*
*********************************************************************/

const req=require('./parenthesesStackBL');

let r = require('readline-sync');
//read an expression from user
let express = r.question("enter the arithmatic expression:");

req.parenthese(express);
