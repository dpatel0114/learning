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
}


var stack = new Stack()
