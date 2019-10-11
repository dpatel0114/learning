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

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
          newTail = current;
          current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
          this.head = null;
          this.tail = null;
        }
        return current; 
      }
  
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
          this.tail = null;
        }
        return currentHead;
      }
    
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
          this.head = newNode;
          this.tail = this.head;
        }else {
          newNode.next = this.head;
          this.head = newNode;
        }
        this.length++;
        return this;
      }
  }


//   var n1 = new Node()
  var obj = new SinglyLinkedList()
  obj.push(100)
  obj.push(200)
  obj.push(250)
  obj.pop()
//   obj.pop()

  obj.unshift(90)

  obj.shift()
  obj.shift()





  console.log(obj)
