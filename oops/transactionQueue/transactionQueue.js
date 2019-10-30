
/********************************************************************
* @Execution    : Desktop/Pradeep/FelloshipJavaScript/oops/transactionQueue.js
* @description  : This program is to read in Stock Names, Number of Share, Share Price. 
                 add shares and time of buy using queue and add time of buy display shares.
* @overview     : oops concepts
* @file         : transactionQueue
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 28-oct-2019
*
*********************************************************************/

const reference = require('../transactionQueue/transactionQueueBL');
var obj = new reference();
obj.jsonParse('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/transactionQueue/transaction.json');
var time = new Date();

obj.buyShares('bajaj', 'new', '10', '10', time);
obj.buyShares('bajaj1', 'new', '105', '100', time);

obj.print();
obj.save();