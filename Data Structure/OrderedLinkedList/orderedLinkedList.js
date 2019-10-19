
let sc=require('readline-sync');
const ls=require('../../Utility/linkedList');
const util=require('../../Utility/utility');
var data=util.fileCall('file.txt');


var linklist=new ls.LinkedList();

data.forEach(element => {
    linklist.sortedInsert(parseInt(element));
});

 var display = linklist.show();
  console.log(display.join(' '));
 

    util.writeFile('file.txt', display)

    let find=sc.question("enter the number you want check");
    var check=linklist.search(find);
    if(check)
    {
        linklist.removeElement(find);
    }   
    else{
        linklist.sortedInsert(find);
    }
    //linkedList.sortedInsert();
    var display = linklist.show();
    console.log(display.join(' '));

   util.writeFile('file.txt', display)
