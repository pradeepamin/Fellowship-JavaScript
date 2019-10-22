/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node toDecimal.js
* @description  : convert given binary number to decimal
* @Purpose      : decimal format
* @function     : Utility/utility
* @file         : toDecimal
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
let sc = require('readline-sync');
let Impt = require('../Decimal to binary/toDecimalBL');
var n = sc.question('Enter the dec Number');
Impt.toDecimal(n);