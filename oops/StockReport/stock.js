
/********************************************************************
* @Execution    : Desktop/Pradeep/FelloshipJavaScript/oops/StockReport.js
* @description  : this program is to read in Stock Names, Number of Share, Share Price and return the value
* @overview     : oops concepts
* @file         : StockReport
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 28-oct-2019
*
*********************************************************************/

const util = require('../../oops/StockReport/stockBL');
var obj = new util();
obj.jsonParse('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/StockReport/stock.json')
obj.value();
// obj.disp();