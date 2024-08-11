class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
        this.size=0;
    }
    push(data){
        const newNode= new Node(data);
        newNode.next= this.head;
        this.head= newNode;
        this.size= this.size+1;
    }
    pop(){
        if(isEmpty()){
            return "stack is empty";
        }
    }
    isEmpty(){
        if(this.size==0){
            return true;
        }
        else{
            return false;
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.head.value;
        }
    }
}

const stack= new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek(),"peeekkkk-----");
