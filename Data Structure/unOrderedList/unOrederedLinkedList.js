try{
const read = require('readline-sync');

    var list = require('../../Utility/linkedList');

    var util = require('../../Utility/utility');

    var linklist = new list.LinkedList(); ////object

    let data = util.fileCall('file.txt');

    data.forEach(element => {
        linklist.insertEnd(element);
        
    });

    // for (let index = 0; index < data.length; index++)
    //     linklist.insert(data[index]);

    var display = linklist.show();
    console.log(display);
    
    let name = read.question("Enter the data you want to search ");
    var check = linklist.search(name);
    console.log(check);
    if (check) {
        linklist.removeElement(name);
     }
    else {
        linklist.insertEnd(name);
     }
     
    var display = linklist.show();
    console.log(display);   
    util.writeFile('file.txt', display)

    
    let c = read.question("Enter the operation 1-insert at start 2- add at position  3-remove  end ");
    switch(parseInt(c))
    {
case 1:  let a = read.question("Enter the element to add at first ");
            linklist.insertStart(a);
            var display = linklist.show();
            console.log(display);   
            util.writeFile('file.txt', display)
    
    case 2:  let ele = read.question("enter the element ");
            let indx=read.question("enter the postion ");
            linklist.insertAt(ele,indx);
            var display = linklist.show();
            console.log(display);   
            util.writeFile('file.txt', display)
    }


}
catch(e)
{
    console.log(e.message);
    console.log(e.name);
}