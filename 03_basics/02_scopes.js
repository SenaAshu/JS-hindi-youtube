let a =50          // GLOBAL SCOPE
var c = 100         // GLOBAL SCOPE
if(true){          
    let a = 10     //
    const b = 23   //       BLOCK SCOPE
    var c = 30     //
}

console.log(a);
// console.log(b);
console.log(c);