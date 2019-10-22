/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node  dayOfWeek.js
* @description  : to find day of the week
* @Purpose      : Day of week
* @function     : Utility/utility
* @file         : dayOfWeek
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
let sc = require('readline-sync');
let reference = require('../Day  of week/dayOfWeekBL')
// taking user input from command line aurgument
let d = parseInt(process.argv[2]);
let m = parseInt(process.argv[3]);
let y = parseInt(process.argv[4]);
 let res=reference.dayOfWeek(d, m, y);
 console.log(res);


