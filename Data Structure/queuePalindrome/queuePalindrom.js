
//const reference=require('../../Data Structure/queuePalindrome')
const refernceQueue=require('../../Utility/queueUtility');
const sc=require('readline-sync');
let palindrome=sc.question("Enter the string to check for palindrome\n");
//let str=palindrome.split(',');
let obj=new refernceQueue.Queue();
for(let i=0;i<palindrome.length;i++)
{
 obj.enqueue(palindrome[i]);
 
}
//obj.show();

let reverseString="";

while(!obj.isEmpty())
{
    let rearDel=obj.deleteLast();
    reverseString=reverseString+ rearDel.data;
}
console.log("After Reverse=",reverseString);

if(reverseString==palindrome){
    console.log(true);

}
else{
    console.log(false);
}




//reference.checkpalindrome(palindrome);