class Node {
    constructor(data){
        this.data=data;
        this.next= null;
    }
}

class LinkedList{
    constructor(){
        this.head= null;
    }

    append(data){
        const newNode= new Node(data);
        if(!this.head){
            this.head= newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current= current.next; 
        }
        current.next =newNode;
    }
    print(){
        let current= this.head;
        while(current){
            console.log(current.data, current);
            current= current.next;
        }
    }

    size(){
        let temp =this.head
        let count=0;
        while(temp!=null){
            temp= temp.next;
            count= count+1;
        }
        return count;
    }
    insertAtbeginning(data){
        let newNode= new Node(data);
        newNode.next= this.head;
        this.head=newNode;
        console.log(this.head,'new-node----at-beginning----')
    }
    middleInsert(k,data){
        let newNode= new Node(data);
        let temp= this.head;
        let c=0;
        while(temp.next!=null){
            temp= temp.next;
            c=c+1;
            if(c==k){
                newNode.next=temp.next;
                temp.next=newNode;
            }
        }
        console.log(this.head,"head---------")
    }

    generalisedInsertionOfNode(k,data){
        if(k>this.size()){
            return this.head;
        }
        let newNode= new Node(data);
        if(k==0){
            newNode.next=this.head;
            this.head= newNode;
            return this.head;
        }
        let temp=this.head;
        for(let i=1; i<k-1; i++){
            temp=temp.next;
        }
        newNode.next= temp.next;
        temp.next=newNode;
        return this.head;
    }
}

const myList = new LinkedList();
for(let i=0; i<5; i++){
    myList.append(i);
}
console.log(myList.size(),"size---of---linked---list-----");

myList.insertAtbeginning(9999);
myList.middleInsert(1,666666);

console.log(myList.generalisedInsertionOfNode(1,234),"generalised-----newnode--------2334")
console.log(myList.generalisedInsertionOfNode(0,900084),"generalised-----newnode--------9000084")

// myList.print();
// myList.append(25)
// myList.append(8)
// myList.append(69)
// myList.append(10);
// myList.print();
const node1= new Node(20);
const node2= new Node(21);
const node3 = new Node(5);



const LinkedListofNumbers=(n)=>{
    let head = new Node(1);

let temp = head;
    for(let i=2; i<n; i++){
        temp.next= new Node(i);
        temp = temp.next;
        if(i==n-1){
            console.log(temp,"tem------p-lastt--node-----")
        }
    }
    return head;

}
console.log(LinkedListofNumbers(10),"----count---from--1--to---10")



console.log(node1, node2, node3,"node1---node22---- node3------")