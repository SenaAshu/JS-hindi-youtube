const coding =["Js","ruby","Java","python","cpp"]

// coding.forEach(function(maxi){
//     console.log(maxi);
// })

//arrow function
// () => {}

// coding.forEach((maxi) => {
//     console.log(maxi);
// })

// function printme(text){
//     console.log(text);
// }
// coding.forEach(printme)

// coding.forEach((text,index,fullArray)=>{
//     console.log(text,index,fullArray);
// })

const arrObj = [ 
    {
        Language:"Javascript",
        file:"Js"
},
{
    Language:"Cascading Style Sheet",
    file:"Css"
},
{
    Language:"Hyper Text Markup Language",
    file:"HTML"
}]
// console.log(arrObj);
arrObj.forEach((item)=>{
    console.log(item.Language);
})