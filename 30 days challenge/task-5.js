// // // // // // // // // // // // // // // // ///////////////////// ACTIVITY 1
// // // // // // // // // // // // // // // // function evenorodd(num){
// // // // // // // // // // // // // // // //     let result = (num%2)==0?"Even":"Odd"
// // // // // // // // // // // // // // // //     return console.log(result);
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // evenorodd(14)

// // // // // // // // // // // // // // // function power(num){
// // // // // // // // // // // // // // //     let result = Math.pow(num,2)
// // // // // // // // // // // // // // //     return result
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(power(10));

// // // // // // // // // // // // // // //                   ACTIVITY 2

// // // // // // // // // // // // // // // function greater(num1,num2){
// // // // // // // // // // // // // // //      return num1>num2?`${num1} is greater`:`${num2} is greater`
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(greater(17,9))

// // // // // // // // // // // // // // function concat(str1,str2){
// // // // // // // // // // // // // //     str3 = str1.concat(" "+str2)
// // // // // // // // // // // // // //     return str3
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(concat("Hello","World"));



// // // // // // // // // // // // // function evenOdd(num){
// // // // // // // // // // // // //     if(num%2==0){
// // // // // // // // // // // // //         console.log("Even");
// // // // // // // // // // // // //     }else{
// // // // // // // // // // // // //         console.log("odd");
// // // // // // // // // // // // //     }
// // // // // // // // // // // // // }
// // // // // // // // // // // // // evenOdd(3)

// // // // // // // // // // // // function square(num){
// // // // // // // // // // // //     return Math.pow(num,2)
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(square(5));


// // // // // // // // // // // const result = ((num)=>Math.pow(num,2))
// // // // // // // // // // // console.log(result(2));

// // // // // // // // // // function concatenation(str1,str2,str4){
// // // // // // // // // //     let str3 = (str1+" "+str2+" "+str4)
// // // // // // // // // //     console.log(str3);
// // // // // // // // // // }
// // // // // // // // // // concatenation("Hello","World","Welcome")

// // // // // // // // // // let newstring = ((str1,str2)=>(str1+" "+str2))
// // // // // // // // // // console.log(newstring("Hello","World"));

// // // // // // // // // function characterCheck(str,chek){
// // // // // // // // //     if(str.includes(chek)){
// // // // // // // // //         return true
// // // // // // // // //     }else{
// // // // // // // // //         return false
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // // console.log(characterCheck("Heloo","o"));
// // // // // // // // // // console.log(characterCheck("heloo","z"));

// // // // // // // // // const CharacterCheck = (str,chek)=>str.includes(chek)
// // // // // // // // // console.log(characterCheck("Hello","H"));
// // // // // // // // // console.log(characterCheck("Hello","z"));

// // // // // // // // function product(para1,para2=10){
// // // // // // // //     return para1*para2
// // // // // // // // }
// // // // // // // // // console.log(product(2));

// // // // // // // // let count = (n1,n2=2)=>(n1*n2)
// // // // // // // // console.log(count(3  ));

// // // // // // // function info(name,age=20){
// // // // // // //     // console.log(`Greeting! ${name}, Welcome On board and your age is ${age}`);
// // // // // // // }
// // // // // // // info("maxi");

// // // // // // // let info2 =(name,age=20) => (console.log(`Greeting! ${name}, Welcome On board and your age is ${age}`))
// // // // // // // info2("maxi",22)

// // // // // // // Higher-order function
// // // // // // function repeatFunction(fn, times) {
// // // // // //     for (let i = 0; i < times; i++) {
// // // // // //         fn();
// // // // // //     }
// // // // // // }

// // // // // // // Example function to print a message
// // // // // // function sayHello() {
// // // // // //     console.log("Hello!");
// // // // // // }

// // // // // // // Another example function to print a different message
// // // // // // function sayGoodbye() {
// // // // // //     console.log("Goodbye!");
// // // // // // }

// // // // // // // Example usage
// // // // // // repeatFunction(sayHello, 3);  // Output: "Hello!" (printed 3 times)
// // // // // // repeatFunction(sayGoodbye, 2); // Output: "Goodbye!" (printed 2 times)



// // // // // function main2(fn,number){
// // // // //     for(let i=1;i<=number;i++){
// // // // //         fn()
// // // // //     }
// // // // // }

// // // // // function hello(){
// // // // //     console.log("Hello");
// // // // // }

// // // // // function hiii(){
// // // // //     console.log("Hiiiii");
// // // // // }

// // // // // main2(hello,3);
// // // // // main2(hiii,6);


// // // // function lastwork(fn,times){
// // // //     for(let i=0;i<times;i++){
// // // //         fn()
// // // //     }
// // // // }

// // // // function sayhello(){
// // // //     console.log("Hello");
// // // // }

// // // // function sayhii(){
// // // //     console.log("Hii");
// // // // }

// // // // lastwork(sayhello,3)
// // // // lastwork(sayhii,2)

// // // function firstone


// // function first(fn1,fn2,val){
// //     let result1 = fn1(val)
// //     let final = fn2(result1)
// //     console.log(final);
// // }

// // function double(val){
// //     return val*2
// // }

// // function square(val){
// //     return val*val
// // }

// // first(double,square,5)

// function lastwork(fn,times){
//         for(let i=0;i<times;i++){
//             fn()
//         }
//     }
    
//     function sayhello(){
//         console.log("Hello");
//     }
    
//     function sayhii(){
//         console.log("Hii");
//     }
    
//     lastwork(sayhello,3)
//     lastwork(sayhii,2)




function first(fn1,fn2,val){
    let result1 = fn1(val)
    let final = fn2(result1)
    console.log(final);
}

function double(val){
    return val*2
}

function square(val){
    return val*val
}

first(double,square,5)