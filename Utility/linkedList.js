class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedList { 
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = -1;
    }

    insert(data) {
        let newNode = new Node(data);
        newNode.next = null;
        if (this.head == null) {
            this.head = newNode;
            this.size++;
        }
        else {
            let node=this.head;
            while(node.next)
            {
                node=node.next;
            }
            node.next=newNode;
        }
        this.size++;
    }

    insertStart(data) {

        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    insertEnd(data) {
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            this.size++;

        }
        else {
            node.next = null;
            let tail = this.head;
            while (tail.next !== null)
                tail = tail.next;
            tail.next = node;
            tail
            this.size++;

        }
    }

    insertAt(element, index){

        if(index>0 && index>this.size)
            return false;
            else{
            let node =new Node(element);
            
            if(index==0)
            {
                node.next=head;
                this.head=node;
            }
            else
            {
                let curr=this.head;
                let i;
            for(i=0;i<index-1;i++)
            {
                curr=curr.next;
            }
            node.next=curr.next;
            curr.next=node;
            }
            }
        
   
            


    }

    removeFirst() {             
        if (this.head == null) {
            return;
        }
        var data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
      }

    removeElement(data) 
    {
        var curr=this.head;
        var prev=null;
        while(curr!=null)
        {
            if(curr.data==data){
                if(prev==null){
                this.head=curr.next;
            }else{
                prev.next=curr.next;
            }
            this.size--;
            return curr.data;
           
        }
        prev=curr;
        curr=curr.next
        }
        return -1;
        //console.log("element not found");
    }

    search(data) {
        try {
          var temp = this.head;
          while (temp) {
            if (temp.data == data) {
              return true;
              //console.log("elemnt found");
            }
            temp = temp.next;
          }
          return false;
        } catch (error) {
          console.log(error.message);
        }
      }
    

    // show1() {
    //     let node = this.head;
    //     while (node.next !== null) {
    //         console.log(node.data);

    //         node = node.next;
    //     }
    //     console.log(node.data);


    // }

    show() {
        var arr = [];
        this.temp = this.head
        while (this.temp != null) {
            arr.push(this.temp.data);
           
            this.temp = this.temp.next

        }
       
        return arr;


    }



    size() {
        return this.size;

    }
    isEmpty() 
    { 
        return this.size == 0; 
    }




    sortedInsert(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node
            this.size++
        }
        else {
            while (current.next && node.data >= current.next.data) {              //2 4 5 7 8-----6
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
            return data;
        }
    }

    sortData() {
        if (this.head == null) {
            console.log("empty");
            return;
        } else {
            this.temp = this.head;
            while (this.temp !== null) {
                this.current = this.temp.next;
                while (this.current !== null) {
                    if ((this.temp.data) > (this.current.data)) {
                        this.temp1 = this.temp.data;
                        this.temp.data = this.current.data;
                        this.current.data = this.temp1;
                    }
                    this.current = this.current.next;
                }
                this.temp = this.temp.next;
            }

        }
    }
    // print() {          ///remo0v
    //     let node = this.head;
    //     while (node.next !== null) {
    //         console.log(node.data);

    //         node = node.next;
    //     }
    //     console.log(node.data);

    // }

} 
// var list= new LinkedList();
// list.sortedInsert(10);
// list.sortedInsert(100);
// list.sortedInsert(5);
// list.sortedInsert(25);
// list.print();



module.exports={LinkedList};




    


