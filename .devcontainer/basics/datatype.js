let score = 33
console.log(typeof score) ;
console.log(typeof(score)) ;


let sc = "22"
let valueInNumber = Number(sc)
console.log(typeof(valueInNumber))
// it will now give a number datatype 

//but in this case :
let sce = "33abcd"
let valueSce = Number(sce)
console.log(valueSce)
//it will print not a number (nan)
//in the output


let sca = "null"
let valueSca = Number(sca)
//convert it to number:
console.log(valueSca)
//it will print 0


let scb = "undefined"
let valueScb = Number(scb)
console.log(valueScb)
//will print nan


let scc = "true"
let valueScc = Number(scc)
console.log(valueScc)
//it will print 1 :

//"33" -> number
//"33abc" -> NaN
//true -> 1 ; false -> 0

//converting to boolean :
let isLoggedIn = "kanak"
let boooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boooleanIsLoggedIn);
//it will print true

let isLoggedIn1 = ""
let boooleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(boooleanIsLoggedIn1);
//it will print false 

//1->true  0->false ""->false "kanak"->true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber)
//it will print 33 only
console.log(typeof someNumber)
//the number has been converted to string now so it will print
//string:

//*Operations/
let value = 3
let negValue = -value
console.log(negValue)

console.log(+true)
//will print 1

let num1 , num2 , num3
num1 = num2 = num3 = 2+2

let gamecounter = 100
gamecounter++
console.log(gamecounter)

//here == , === works differently 
//than >= and <= 
//no problem in basic conversion
//like both operands are of same type

//if the datatypes of both the 
//operands are different then stucks 

//in case of null sometimes it gets converted to 
//nan (as done by equal equal to) and sometime to a number 0(as done by comparisons)



//*********** datatypes*/
//data is categorised into primitive and nonprimitive 
//on the basis of how they are stored and how they are accessed

//primitive (call by value)
//7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

//Reference type[non-primitive]
//Array , Objects , Functions

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
//it will return false because the return type of both will be different


//reference type exmaples:
const heroes = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "kanak",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}
//type of null is object
//type of undefined is undefined
//type of Boolean is boolean
//type of Number is number 
//type of String is string
//type of Symbol is symbol
//type of BigInt is bigint
//type of Arrays is object
//type of Function is function
//type of Object is object


//Stack(Primitive) , Heap(Non-primitive)

let myYoutubeName = "kanak_sabhnani"
let anotherName = myYoutubeName

console.log(myYoutubeName)
console.log(anotherName)
//since a copy is passed only hence myYoutubeName is itself not changed

let user = {
    email: "user@google.com" ,
    upi: "upi@google"
}

let user2 = user ;
user2.email = "kanaksabhnani2002@gmail.com"
user2.upi = "kanakupi@22"

console.log(user.email)
console.log(user.upi)
//since they are passed with reference they get changed

