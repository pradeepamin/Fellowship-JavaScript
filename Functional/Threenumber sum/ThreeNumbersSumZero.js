/********************************************************************
* @Execution    : Desltop/pradeep/Functional$ node ThreeNumbersSumZero.js
* @description  : Sum of three Integer adds to ZERO
* @Purpose      : Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0
* @file         : ThreeNumbersSumZero.js
* @overview     : Sum of three Integer
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : v12.10.0
* @since        : 12-oct-2019
*
*********************************************************************/

var arr=[3,-1,-7, 4,-5,9,10];

var res=threeNo(arr);


function threeNo(arr)
{
try{
      for(var i=0;i<arr.length;i++)
      {
          for(var j=i+1;j<arr.length;j++)
          {
              for(var l=j+1;l<arr.length;l++)
              {
                  if(arr[i]+arr[j]+arr[l]==0)
                  {
                      console.log("The 3 elements whose sum is = 0");
                      console.log("Elements are " + arr[i] + " " + arr[j]+ " " + arr[l]);
                      return;
                  }
              }
          }
      }
    }
    catch(e)
    {
      console.log(e.message);
      console.log(e.name);
    }
      console.log("Did not find 3 elements whose sum is = 0");
}     


