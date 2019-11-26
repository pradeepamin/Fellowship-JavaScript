/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node FlipCoin.js
* @description  : Flip Coin and print percentage of Heads and Tails
* @Purpose      : FlipCoin according to user wish
* @file         : FlipCoin.js
* @overview     : Percentage of Head vs Tails
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 11-oct-2019
*
*********************************************************************/

const Imp=require('../FlipCoin/FlipCoinBL')
const sc=require('readline-sync');
let toss=sc.question("Enter the number of times you want to toss\n");
Imp.Flip_Coin(toss);


