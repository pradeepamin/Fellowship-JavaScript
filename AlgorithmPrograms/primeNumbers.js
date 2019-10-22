/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node primeNumbers.js
* @description  : Prime numbers with given range
* @Purpose      : To print N Prime number 
* @function     : Utility/utility
* @file         : primeNumbers
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/

const Impt=require('../Utility/utility')
let sc=require('readline-sync');
//let primeNumber=sc.question("enter the prime no");
//let res=Impt.tocheckPrime(primeNumber);

let alist=[];
for(let i=0;i<100;i++)
		{
			if(Impt.checkPrimeNumber(i))
			{
				alist.push(i);
			}
			
		}
		

console.log(alist.join(','));

