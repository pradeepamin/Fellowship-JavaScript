/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node vendingMachine.js
* @description  : TO calculate count of notes with given amount
* @Purpose      : note counter
* @function     : Utility/utility
* @file         : toDecimal
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
let sc = require('readline-sync');
let Impt = require('../Vending Machine/vendingMachineBL');
var amount = sc.question('enter amount');
Impt.vendingMachine(amount);