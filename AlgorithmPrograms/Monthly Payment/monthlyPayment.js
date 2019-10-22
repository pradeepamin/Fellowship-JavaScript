/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node  monthlyPayment.js
* @description  : to calculate monthly loan amount to be paid
* @Purpose      : loan amount calculation 
* @function     : Utility/utility
* @file         : monthlyPayment
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
let sc = require('readline-sync');
let reference = require('../Monthly Payment/monthlyPaymentBL')
// taking user input from command line aurgument enter as node monthlyPayment.js 2000 2 3
let P = parseInt(process.argv[2]);
let Y = parseInt(process.argv[3]);
let R = parseInt(process.argv[4]);
 reference.checkPayments(P,Y,R);
