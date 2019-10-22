/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node Distance.js
* @description  : Distance from the point (x, y) to the origin (0, 0)
* @Purpose      : FlipCoin according to user wish
* @file         : Distance.js
* @overview     : To find distance between two points
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 12-oct-2019
*
*********************************************************************/

const Impt=require('../Functional/DistanceBL')
const sc=require('readline-sync');
var x=sc.question("Enter the value for x\n");
var y=sc.question("Enter the value for y\n");

var result=Impt.distancePoint(x,y);
console.log("Distance from (" +x+ "," +y+ ")to (0,0,)="+result);