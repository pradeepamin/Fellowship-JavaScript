class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue {

    constructor() {

        let queue = [];
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return !this.front;
    }

    enqueue(data)  //add at rear
    {
        let node = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        }
        else {
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node;
        }


    }
    dequeue() // removes from front
    {
        let node = this.front;
        if (!this.isEmpty()) {
            this.front = this.front.next;

        }
        if (!this.front) {
            this.rear = null;

        }
        return node;
    }

    deleteLast() {
        if (this.front) {
            let current = this.front;
            if (current.next == null) {
                let temp = current;
                this.front = null
                //this.size--
                return temp
            } else {
                while (current.next.next) {
                    current = current.next
                } let temp = current.next
                current.next = null
                //this.size--
                return temp;
            }
        } else {
            console.log('Nothing to delete')
        }
    }
    rearpop() {

    //     let node = this.rear;
    //     if (!this.isEmpty()) {
    //         this.rear = this.rear.prev;
    //     }
    //     if (!this.rear) {
    //         this.front = null;
    //     }
    //    // this.print();


    //     return node;

    //let node=this.rear;
    if(this.front==this.rear) this.front=null;
    this.rear=this.rear.prev;
    //return node;
    }






    show() {
        if (this.isEmpty()) {
            console.log('empty');
        }
        else {
            var temparr = [];
            var temp = this.front;
            while (temp) {
                temparr.push(temp.data);
                temp = temp.next;
            }
            console.log(temparr.join(','));
        }

    }

}
let q=new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.rearpop();

//  q.dequeue();
// // //q.dequeue();
// // q.deque();

// q.rearpop();
// q.deleteLast();
// let y=q.deleteLast();
// console.log(y);
 q.show();
//module.exports = { Queue };