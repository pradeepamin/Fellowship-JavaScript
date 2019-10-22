/**************************************************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node temperatureConverstion.js
* @description  : With the given number conver from Celsius to Fahrenheit and Fahrenheit to Celsius
* @Purpose      : To print the Celsius and Fahrenheit
* @function     : Utility/utility
* @file         : temperatureConverstion
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*****************************************************************************************************/
var sc = require('readline-sync');
var Impt = require('../Temperature converstion/temperatureConverstionBL');
var n = sc.question("1==>> celcious to Farneheight, 2==>> Farneheight to celcious\n");
var C =  sc.question("Enter the Temprature");
Impt.Conversion(n,C);

