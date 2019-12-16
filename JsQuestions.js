// Q: What is closure in jS? ==> frequantly asked que in interview 
// A: When you define function and you do not passed parameter, still you can access that data within function from outer function or outer scope its called closure. 
let addTo = function(passed){

    let add = function(inner){
        return passed + inner // In this function we did not pass parameter called passed still you can acess that from the outer function 
    }
    
    return add  // its return add function it self 
    
    }
    
    let tryMe = addTo(5)  // tryMe is the add function whatever its returns ==> passed=5 
    console.dir(tryMe)
    console.log(tryMe(2)) // tryMe is add function so when u call tryMe It will run add function and giving you the answer of add()

    // Q: How to create Private variable in Javascript?
    function secretVariable(){

        var private = xyz
    }
    
    // A: 
    function secretVariable(){
        var private = xyz
        return function(){
        return private
        }
        }
        var getPrivateVariable = secretVarible()
        console.log(getPrivateVariable)
        // ans: xyz 
        