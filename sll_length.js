
class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
        this.size = 0;
        
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
    indexOf(value){       //search list for element
        var count = 0;
        var current = this.head;

        while (current != null){
            if (current.value === value)
                return count;
            count++;
            current = current.next;
        }
        return -1;        //This tells if not found
    }
    display(){
        var cur = this.head;
        var mylist = "";

        while (cur) {
            mylist += cur.value + " ";
            cur = cur.next;
        }
        console.log(mylist);
    }
    lengthList(){
        console.log(this.size);
    }
}

const list = new List();  //construtor based object
list.addFront('Mike');
list.addFront('Amy');
list.addFront('Rudy');
console.log(list);

console.log(list.removeFront());
console.log(list);

console.log(list.indexOf('Mike'));

list.display();

console.log(list.lengthList());


