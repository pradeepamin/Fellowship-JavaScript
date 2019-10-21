
const refernce=require('../../Data Structure/queueBanking/bankCashCounterBL');

const sc=require('readline-sync');

let bal=parseInt(100);

let n=sc.question("enter the no of customer");
refernce.banking(bal,n);

