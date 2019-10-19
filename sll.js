
class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
        
    }
    addFront(value){
        const node = new Node(value);

        node.next = this.head;    //saves the head data to next so it's not destroyed
        this.head = node;
    }
    removeFront(){
        if (this.head === null){
            return null;
        }
        const node = this.head;

        this.head = node.next;   //saves the head data to next so it's not destroyed

        return node.value;
    }
}

const list = new List();  //construtor based object
list.addFront('Mike');
list.addFront('Amy');
list.addFront('Rudy');
console.log(list);
console.log(list.removeFront());
console.log(list);
