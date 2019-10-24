class Node{
    constructor(data, prev=null)
    {
        this.data=data;
        this.next=null;
        this.prev=prev;
       
    }   

}
class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }

    // isEmpty()
    // {
    //     return this.top==null;
    // }

    isempty() {
        if (!this.top) return true;
        return false;
    }

    push(data){

        let newNode=new Node(data);
        newNode.next=this.top;
        this.top=newNode;
        this.size++;

    }

    disp()
    {
        var arr=[];
        this.temp=this.top;
        while(this.temp!=null)
        {
            arr.push(this.temp.data)
            console.log(this.temp.data);
            this.temp=this.temp.next;
        }
        return arr;
    }
    size()
    {
        return this.size;
    }
    // pop(){
    //     if(!this.top)
    //     return this.pop;
    //     else{
    //         let temp=this.top;
    //         this.top=this.top.prev;
            
    //         return temp.data;

    //     }
    //  }
     pop() {
        if (!this.top) this.push('');
        else {
            let temp = this.top;
            this.top = this.top.prev;
            return temp.data;
        }
    }

    
}

// var st=new Stack();

// // console.log(st.isEmpty());
// st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);

// // console.log("size",st.size);
// // console.log("pop",st.pop());

// // st.pop();
// // st.pop();
// st.disp();
module.exports={Stack};