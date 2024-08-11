class Stack{
    constructor(data){
        this.stackArray=[];
    }
    push(data){
        this.stackArray.push(data);
    }

    pop(){
        if(!this.isEmpty()){
            this.stackArray.pop();
        }
        
    }
    
    isEmpty(){
       return this.stackArray.length==0;
    }

    printstack(){
        return this.stackArray;
    }
}

const stack1 = new Stack();
stack1.push(20);
stack1.push(10);
stack1.push(30);
stack1.push(5);
stack1.push(6);
stack1.pop();
console.log(stack1.printstack());
