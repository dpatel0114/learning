// ? DATA STURCTURE : 1. SinglyLinked List: 
// To make Node class 
// TO make Singly Linked List class
// TODO: First PUSH method ; 
// TODO: Second POP method ;



class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  class SinglyLinkedList{
  
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val){
      var newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      }else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
  }


  var obj1 = new SinglyLinkedList()
  obj1.push("First")
  obj1.push("Second")
  obj1.push("Third")

//   var obj = obj1.push()
  console.log(obj1)
