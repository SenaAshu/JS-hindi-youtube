let score = 33
console.log(typeof score); //output:- number

let score2 = "33"
console.log(typeof score); //output:- string

// but i wants ki mera input number hni ho
let aNumber = 33
let aNumberISaREALnumber = Number(aNumber);
console.log(aNumberISaREALnumber); 
// 33/"33" => 33
// "33abc" => NaN (Not a Number)
//"null" => 0
//"true" => 1 ,"false" => 0


let number = "33"
let numberToBoolean = Boolean(number)
console.log(numberToBoolean);

let another = ""
let anotherToString = String(another)
console.log(anotherToString);

//************************************OPERATIONS***********************************/
let value = 3
let negvalue = -value
console.log(negvalue);