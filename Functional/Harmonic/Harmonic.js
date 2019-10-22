/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node Harmonic.js
* @description  : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
* @Purpose      : Print the Nth Harmonic Value.
* @file         : Harmonic.js
* @overview     : Harmonic number
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 11-oct-2019
*
*********************************************************************/

const Impt=require('../Functional/HarmonicBL')
const sc=require('readline-sync');
var n=sc.question("Enter the Nth harmonic number\n");
var result=Impt.harmonic_series(n);

console.log("Harmonic value of  "+n+ "Is\t" +result);