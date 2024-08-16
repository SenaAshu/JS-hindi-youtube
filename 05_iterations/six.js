const coding =["Js","ruby","Java","python","cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})
// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9]

const newnums = mynums.filter((num)=> num>4)
// console.log(newnums);

const newNums =[]
mynums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);