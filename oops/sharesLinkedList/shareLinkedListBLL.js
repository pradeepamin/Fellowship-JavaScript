class Node {
    //created node class with attributes data and next
    constructor(name, shares, price) {
        this.data = {
            name: name,
            shares: shares,
            price: price
        }
        this.next = null;
    }
}

module.exports = class LinkedList {
    //constructer to make head=null
    constructor() {
        this.head = null;
    }
    //push operation will add data to the front of the linkedlist
    firstAdd(data, shares, price) {
        let newNode;
        if (arguments.length == 1)
            newNode = new Node(data.name, data.shares, data.price);
        else
            newNode = new Node(data, shares, price);
        newNode.next = this.head;
        this.head = newNode;
    }

    //to display in the linkedlist
    getArray() {
        let temp = this.head;
        let arr = [];
        while (temp) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }
    //to delete from linkedlist
    lastDelete(name) {
        let temp = this.head;
        if (this.head.data.name === name)
            this.head = temp.next;
        else {
            let temppre = null;
            while (temp.data.name !== name) {
                temppre = temp;
                temp = temp.next;
            }
            temppre.next = temp.next;
        }
    }

}