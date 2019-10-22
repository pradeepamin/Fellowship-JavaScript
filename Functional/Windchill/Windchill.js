/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node Windchill.js
* @description  : Winschill to define the effective temperature
* @file         : Windchill.js
* @overview     : Winschill to define the effective temperature
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 12-oct-2019
*
*********************************************************************/

const Impt=require('../Functional/WindChillBL')
const sc=require('readline-sync');
var t=sc.question("Enter the value for x\n");
var v=sc.question("Enter the value for y\n");

var res=Impt.windchill(t,v)
console.log(res);

        