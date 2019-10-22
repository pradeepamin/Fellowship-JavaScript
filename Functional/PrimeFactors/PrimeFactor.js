/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node PrimeFactor.js
* @description  : Prime factorization of N
* @Purpose      : Factorization
* @file         : PrimeFactor.js
* @overview     : PrimeFactor
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 11-oct-2019
*
*********************************************************************/
const Impt=require('../Functional/PrimeFactorBL')
const sc=require('readline-sync');
var num=sc.question("Enter the number for prime Factorialization\n");

 Impt.primeFact(num);
//console.log("Prime factorization are\n");
