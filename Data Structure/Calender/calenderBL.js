let array=[];
getCal=(month,year)=>{
//this line is used for Returns the day of the week (from 0-6)
let d0=new Date(year,month-1,1).getDay();
console.log(d0);
//this line is udsed for Returns the day of the month (from 1-31)
let m0=new Date(year,month,0).getDate();
console.log(m0);
//create empty array
//push the items into array
array.push(["sun","mon","tue","wed","thu","fri","sat"]);
//initially k value is 1;
let k=1;
//this forloop is used for row
for(i=0;i<=5;i++)
{
//create empty array using data
let date=[];
//this for loop is used for col purpose
for(j=0;j<7;j++)
{
//in this condition k is lessthan month and day is less than j
if(k<=m0 && j>=d0)
{
//this condition is used for line space
if(k>9)
//if k is greaterthan 9 it wil print(10 )
date.push(k+" ");
else
//k is less than 9 it wil print( 1 ) 
date.push(" "+k+" ");
//increment the value
k++;
//this line is used for week days
d0=d0-7;
}
//this line is used for (do) is lessthan means it will display with empty elements
else date.push([' ']+"")
}
//to store the date elements in array
array.push(date)
}
//display the array elements
// console.log(array)
}
var f=()=>{
array.forEach(a=>{
let str=""
a.forEach(an=>{
str=str+an+' ';
})
console.log(str)
})
}
module.exports={getCal,f};
