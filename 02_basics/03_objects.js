const symbol = Symbol("key1")
let user = {
    name:"Maxi",
    "Full name":"Ashutosh Senapati",
    [symbol]:"key1",
        Roll:202040198,
    Age:22,
    location:"Banglore",
    isLoggedIn:false,
    LastLoggedIn:["Monday","Saturday"]
}
console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user[symbol]);

console.log(user["Full name"]);
user.Age=21
console.log(user);
Object.freeze(user.Age)
user.name = "wert"
console.log(user);
user.Age=33
console.log();

user.greetings = function(){
    console.log("Hello There!");
}
console.log(user.greetings());

user.greetingstwo = function(){
    console.log(`Hello there! Glad to see you again ${this.name}`);
}
user.greetingstwo()