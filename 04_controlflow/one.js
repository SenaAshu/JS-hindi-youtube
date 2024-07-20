// // // // <,>,<=,>=,==,!=,===

// // // const statement = true

// // // if(statement){
// // //     console.log("executed");
// // // }

// const balance = 1000
// // if(balance>5000) console.log("Yes it is");

// if(balance <500){
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("Less than 750");
// } else if(balance<900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
const guestuser = true

if(userloggedin && debitcard && 3 ==2){
    console.log("Allowed");
}

//    Either this    "or"     this        "or"   this
if(loggedinfromgoogle || loggedinfromemail || guestuser){
    console.log("User logged in");
}