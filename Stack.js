// ? DATA STURCTURE : 2. Stacks: 
//  // TODO: First PUSH method ; 
// TODO: Second POP method ;
// this is like shift and unshift bcz we are adding and removing from beginnning 
// In Stacks, last go in first go out ==> LIFO 
// If you add somthing in stack and which ever on top of it as last element, that element comes out first. 

// Make Node class
// Make Stack class

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

// it is like singly linked list but instead of using head and tail, we are using first nd last element::::
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){
          this.first = newNode;
          this.last = newNode;
        }else{
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
        }
        return ++this.size;
      }


}


var stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
console.log(stack)
