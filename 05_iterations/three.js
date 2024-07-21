//Array specific loops

// ["",""]  //string in array
// [{},{}]  //object in array

const arr=[1,2,3,4,5]
for (const n of arr) {
    // console.log(n);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`each char is: ${greet}`);
}

//maps       itself a object

const country = new Map()
country.set("IN","India")
country.set("CN","China")
country.set("JN","Japan")
country.set("RS","Russia")
country.set("IN","India")
console.log(country);

for (const key of country) {
    // console.log(key);
}
 
for (const [key,maxi] of country) {
    console.log(key,':-',maxi);
}