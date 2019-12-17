//* Q: What is closure in jS? ==> frequantly asked que in interview 
    // A: When you define function and you do not passed parameter, still you can access that data within function from outer function or outer scope its called closure. 
    // closures:  are created whenever a variable tht is defined outside the current scope is accessed from within some inner                scope. 
    let addTo = function(passed){

    let add = function(inner){
        return passed + inner // In this function we did not pass parameter called passed still you can acess that from the outer function 
    }
    
    return add  // its return add function it self 
    
    }
    
    let tryMe = addTo(5)  // tryMe is the add function whatever its returns ==> passed=5 
    console.dir(tryMe)
    console.log(tryMe(2)) // tryMe is add function so when u call tryMe It will run add function and giving you the answer of add()


//* Q: How to create Private variable in Javascript?
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

    
//* Q: What is output?
    console.log(typeof(typeof 1))
    // A: typeof 1 ==> number 
    // typeof number ==> string 
    // typeof('number') ====> ans will be string 


//* Q: how to add something to end or begining?
    var myArray = [a,b,c,d]
    myArry.push('end')
    myArray.unshift('start')

    // ES6:
    myArray = ['start', ...myArray]
    myArray = [...myArray, 'end']
    myArray= ['start', ...myArray, 'end']


//* Q: What are the data types in javascript?      
    // A: there are two datatype : primitive and object 
   // ?  primitive: String, null, undefined, boolean, number, symbol
    

//* Q: what is output?
    
    var num = 4;
    function outer(){
        var num = 2
        function inner(){
        num++;
        var num = 3;
        console.log(num)}
        inner();
    }
        outer();

        // A: Output will be num = 3 //var num = 4 is not in the scope; when inner is called it will only gives num = 3 bcz its in the scopr function and outer is not called inside the function so when you call outer function only inner function runs and it will gives you 3 as answer. 
