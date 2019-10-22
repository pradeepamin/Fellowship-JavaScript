/***************************************************************************************
* @Execution    : Desltop/pradeep/Functional$ node ReplaceString.js
* @description  : Replace String Template “Hello <<UserName>>, How are you?”
* @Purpose      : Replace String
* @file         : ReplaceString.js
* @overview     : To replace given string
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 11-oct-2019
*
*******************************************************************************************/

const Impt=require('./ReplaceStringBL')
var sc=require('readline-sync');
var str=sc.question("Enter the the name");
Impt.namereplace(str);