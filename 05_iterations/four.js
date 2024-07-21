// // // const myobj = {
// // //     js: 'Javascript',
// // //     cpp:"C++",
// // //     rb:"ruby",
// // //     swift:"swift by apple"
// // // }
// // // for(const key in myobj){
// // //     // console.log(key);
// // // }
// // // for (const key in myobj){
// // //     // console.log(myobj[key]);
// // // }

// // // for(const key in myobj){
// // //    console.log(`${key} shortcut is used for ${myobj[key]}`)
// // // }

// // const shortcuts = ["c++","js","html"]
// // for(const key in shortcuts){
// //     console.log(shortcuts[key]);
// // }

// // const shortcuts2 = ["c++","js","html"]
// // for(const key of shortcuts2){
// //     console.log(key);
// // }

// const country = new Map()
// country.set ("IN","India")
// country.set ("FR","France")
// country.set ("RS","Russia")
// console.log(country);

// for(const [key,value] of country){
//     console.log(key,':-',value);
// }

// for(const [key,value] in country){
//     console.log(key,"+",value);
// }
let greeting = "Hello";

for (let maxi of greeting) {
    console.log(maxi);
}