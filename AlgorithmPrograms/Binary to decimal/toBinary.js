/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node toBinary.js
* @description  : convert given number to binary
* @Purpose      : binary format
* @function     : Utility/utility
* @file         : toBinary
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
let sc = require('readline-sync');
let Impt = require('../Binary to decimal/toBinaryBL');
var n = sc.question('Enter the Binary Number');
Impt.toBinary(n);