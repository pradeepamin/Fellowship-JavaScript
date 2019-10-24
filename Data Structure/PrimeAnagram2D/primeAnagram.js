/********************************************************************
* @Execution    : Desltop/pradeep/AlgorithmPrograms $ node primeAnagram.js
* @description  : Prime numbers that are Anagram
* @Purpose      : To print N Prime number and check anagram in it.
* @function     : Utility/utility
* @file         : primeAnagram.js
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 15-oct-2019
*
*********************************************************************/
const Impt=require('../../Utility/utility')
let start=1,end=100;
try{
for(let index=0;index<10;index++)
{
    // var arr = new Array();
    let a=[];
    let b=[];
    for(let n=start;n<end;n++)
    {
        if(Impt.checkPrimeNumber(n))
        {
            a.push(n);
        }
    }
    //console.log(a.join(',')+"\n");
    start=start+100;
    end=end+100;
    for(let j=1;j<a.length;j++)
			{
				for(let k=j+1;k<a.length;k++)
				{
                    
                    let m = a[j].toString(); 
                    let n = a[k].toString();
           
        
            if(Impt.checkAnagram1(m,n))
            {
                b.push(m);
                b.push(n);   
            }
        }
    }
    console.log(b.join(',')+"\n");
}
}catch (e)
{
    console.log(e.name);
    console.log(e.message);
}