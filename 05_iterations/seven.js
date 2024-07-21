// // // const myNumbers = [1,2,3,4,5,6,7,8,9]

// // // // const newnums = myNumbers.map((num)=>{return num+10

// // // // })
// // // // console.log(newnums);

// // // //chaining

// // // const newnums = myNumbers.map((num)=>num*10)
// // //                         .map((num)=>num+1)
// // //                         .map((num)=>num+5)
// // //                         .filter((num)=>num>=40)

// // //                         console.log(newnums);

// // const mynum = [1,2,3]

// // let total = mynum.reduce(function(acc,curval){
// //     return acc + curval
// // },0)

// const mynum = [1,2,3,4,5]

// // const newNum = mynum.reduce(function(accumalator,currentvalue){
// //     console.log(`Accumalator: ${accumalator}         Current Value: ${currentvalue}`);
// //     return accumalator + currentvalue
// // },0)
// // // console.log(newNum);

// let total = mynum.reduce((acc,curr)=>(acc+curr),0)
// console.log(total);

const ShoppingCart = [
    {
        itemname:"soap",
        price:299
    },
    {
        itemname:"Powder",
        price:55
    },
    {
        itemname:"facewash",
        price:310
    },
    {
        itemname:"sunscreen",
        price:410
    },
    {
        itemname:"moisturiser",
        price:270
    }
]
// console.log(ShoppingCart);

const total = ShoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(total);