class Node{
    constructor(data){
        this.data= data;
        this.next= null;
    }
}

class LinkedList{
    constructor(){
        this.head =null;
    }
    append(data){
        if(this.head==null){
            console.log(this.head,"head----Null---------")
            this.head= new Node(data);
            return;
        }
        let current = this.head;
        while(current.next){
            console.log(current.next,"before-in while------")
            current= current.next;
            console.log(current, "after----current---while--------")
        }
        console.log(current.next,"outside----while--loop-------")
        current.next = new Node(data);
        console.log(current.next, current,"after creating current node---------")
    }
    print(){
        let current= this.head;
        while(current){
            console.log(current,"currnet--------next--------")
            current= current.next;
        }
    }
}

const myList= new LinkedList();

myList.append(20);
myList.append(10);
myList.append(5);
myList.append(6);
myList.print()