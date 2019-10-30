const fs = require('fs');
//created node class with attributes data,previous and next
class Node {
    constructor(name = null, numberofshares = null, price = null, time = null) {
        this.data = {
            "name": name,
            "numberofshares": numberofshares,
            "price": price,
            "time": time
        }
        this.next = null;
    }
}
// creared stack class with attribute front and rear
class Queue {

    constructor() {
        this.front = null;
        this.rear = null;
        this.fileName = null;
        this.content = null;
    }

    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));
        //console.log(this.content);
    }
    isEmpty() {
        return !this.front;
    }
    /*
     * @description : enqueue
     * @purpose:   link each data to node at the end of queue.
     * @param {data}, which has data information. 
     */
    buyShares(name , numberofshares , price , time ) {
        let node = new Node(name, numberofshares, price, time);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            node.pre = this.rear;
            this.rear = node;
        }
        // this.print();
    }
    /*
     * @description : print
     * @purpose:   prints data from queue.
     * @param {}, which has data information. 
     */
    print() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            var tempArr = [];
            var temp = this.front;
            while (temp) {
                tempArr.push(temp.data);
                console.log(temp.data);
                temp = temp.next;

            }
            //console.log(tempArr.data);

        }

    }
    save() {
        console.log(this.temp)
        fs.writeFileSync(this.fileName,JSON.stringify(this.temp));
    }


}
module.exports = Queue;