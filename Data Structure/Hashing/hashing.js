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
let s1 = a.split(",");
console.log("s1",s1);
s1.forEach((n) => {

   let n1=parseInt(n);
    let key = n1%num;
    array[key] = obj.insert(n);
});
 console.log("in array",array);

array.forEach((element,a)=>{
    console.log(a," " ,element.show());

});

obj.show();