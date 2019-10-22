/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node bankCashCounter.js
* @description  : Banking cash counter using queue
* @Purpose      : Banking Cash Counter
* @file         : bankCashCounter
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 21-oct-2019
*
*********************************************************************/

const refernce=require('../../Data Structure/queueBanking/bankCashCounterBL');

const sc=require('readline-sync');

let bal=parseInt(100);

let n=sc.question("enter the no of customer");
refernce.banking(bal,n);

