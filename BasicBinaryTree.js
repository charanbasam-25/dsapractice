class TreeNode{
    constructor(data){
        this.value=data;
        this.left= null;
        this.right = null;
    }

}

class BinaryTree{
    constructor(){
        this.root= null
    }
    insert(value){
        const newNode= new TreeNode(value);
        if(!this.root){
            this.root= new TreeNode(value);
        }
        else{
            this.InsertNewNode(this.root,newNode);
        }
    }
    InsertNewNode(node,newNode ){
        console.log(node,"node--inserNewNode-----");
        cos
        if(newNode.value<node.value){
            if(!node.left){
                node.left= newNode;
            }else{
                this.InsertNewNode(node.left, newNode)
            }
        }
        else{
            if(!node.right){
                node.right=newNode;
            }
            else{
                this.InsertNewNode(node.right,newNode);
            }
        }

    }
    preOrderTraversal(node=this.root){
        if(node!==null){
            console.log(node.value);
            this.preOrderTraversal(node.left)
            this.preOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);

binaryTree.preOrderTraversal();