// ? DATA STRUCTURE: 4. BST
// TODO: First INSERT method;

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    // insertion : add node to the tree -> will take value in as parameter;
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            if(current.right === null){
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
    }

    // returns the value node it self with this find method
    // Searching - O(log n) --> NOT geranteed. 
    find(value){
        if(this.root === null) return false;
        var current = this.root;
            found = false; 
          while(current && !found){
            if(value < current.value){
              current = current.left
            }else if(value > current.value){
              current = current.right
            }else {
              found = true;
            }
          }
          if(!found) return undefined;
          return current;
      }

      //This method is similar to find but give you true and false as answer:
      contains(value){
        if(this.root === null) return false;
        var current = this.root;
            found = false; 
          while(current && !found){
            if(value < current.value){
              current = current.left
            }else if(value > current.value){
              current = current.right
            }else {
              return true;
            }
          }
          return false;
      }
}