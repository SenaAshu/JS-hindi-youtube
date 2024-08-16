// // console.log("Kmala randi");

// // new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         console.log("Greeting Maxwell");
// //         resolve();
// //     },1500)
// // })
// // .then(()=>{
// //     setTimeout(()=>{
// //         console.log("You are bearing the roll number 202040198 and your branch is CSE.");
        
// //     },2000)
// // })

// // new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         console.log("NIST ID:- asc120@nist.edu");
// //         resolve();
// //     },2500)
// // })
// // .then(()=>{
// //     setTimeout(()=>{
// //         console.log("Your section has been assigned as CSE-'C' which is located at ATR-503");
        
// //     },3000)
// // })


// // new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         console.log("Maxwell here!");
// //         resolve({realname:"Ashutosh",email:"asc120@nist.edu"})
// //     },2000)
// // }).then((user)=>{
// //     console.log(user);
    
// // },2000)



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let error = true;
//     if(!error){
//         resolve({username:"Maxwell",mail:"asc120@nist.edu"})
//     }else{
//         reject("ERROR:Something went wrong")
//     }
// },1000)
// })
// .then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })
// .finally(()=>{
//     console.log("the promise is either resolved or rejected.");
// })
console.log("Hello!");

const promisefive = new Promise(()=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            console.log({username:"maxwell",id:"202040198"});
        }else{
            console.log("ERROR!");
        }
    },2000)
})
async function consumepromisefive(){
    const response = await promisefive;
    console.log(response);
    
}
consumepromisefive();