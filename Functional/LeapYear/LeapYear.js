/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node LeapYear.js
* @description  : Determine if it is a Leap Year.
* @Purpose      : year is leap year or not
* @file         : LeapYear.js
* @overview     : Leap year
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 11-oct-2019
*
*********************************************************************/
var Access=require('./LeapYearBL')
const readline=require('readline-sync');
var year=readline.question("enter the year");
Access.leapYear(year);