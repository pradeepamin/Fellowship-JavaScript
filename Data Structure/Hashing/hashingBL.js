const referenceLinked = require('../../Utility/linkedList')

const fs = require('fs');

const num = 11;

let obj = new referenceLinked.LinkedList();

let array = [];
for (let i = 0; i < num; i++) {
    array[i]=(new referenceLinked.LinkedList);
}
console.log(array);

let file = fs.readFileSync('file.txt');
let a = file.toString();
let s1 = a.split(" ");
console.log("s1",s1);

for( let i in s1)
{
    console.log("i",i);
    let j=parseInt(s1[i])%11;
    console.log(j);
    array[j].insert(parseInt(s1[i]));

}
for( let i in array)
{
    console.log(i);
    console.log(array[i]);
}