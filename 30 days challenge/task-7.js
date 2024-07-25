// // // // // // // // const obj = {
// // // // // // // //     title:'the golden circle',
// // // // // // // //     author:'maxwell',
// // // // // // // //     year:2021
// // // // // // // // }
// // // // // // // // console.log(obj);
// // // // // // // // console.log(obj.title,obj.author);



// // // // // // // let newobj = {
// // // // // // //     title:"Golden sake",
// // // // // // //     author:"Maxwell",

// // // // // // //     obj:function(){
// // // // // // //         return this.title +" is written by "+this.author
// // // // // // //     }
// // // // // // // }
// // // // // // // console.log(newobj.obj());



// // // // // // let book1={
// // // // // //     name:"Maxwell the legend",
// // // // // //     author:"maxi",
// // // // // //     year:2021
// // // // // // }
// // // // // // let updateYear = function(newyear){
// // // // // //      book1.year  = newyear  
// // // // // // }
// // // // // // updateYear(2024)
// // // // // // console.log(book1);


// // // // // let library = 
// // // // // {
// // // // //     name:"banglore library",
// // // // //     books:[{
// // // // //         title:"Horny woman",
// // // // //         author:'kamalbkl'
// // // // //     },
// // // // //     {
// // // // //         title:"Golden circle",
// // // // //         author:'Maxi'
// // // // //     }]
// // // // // }

// // // // // let infos = function(name){
// // // // //     console.log(`Welcome ${name}! to our ${library.name}. The available books are`);
// // // // //     library.books.forEach((book)=>{
// // // // //         console.log(`${book.title} by ${book.author}`);
// // // // //     })
// // // // //     // library.books.map((index)=>{
// // // // //     //    console.log( library.books[index].author);
// // // // //     // })
// // // // // }
// // // // // infos('ashutosh')



// // // // let library = 
// // // //     {
// // // //         library:"Maxi's library",
// // // //         books:[
// // // //             {
// // // //                 title:'maxis struggle',
// // // //                 author:'kamal'
// // // //             },
// // // //             {
// // // //                 title:'soumyas gay story',
// // // //                 author:'maxi'
// // // //             },
// // // //             {
// // // //                 title:'Kamal cant',
// // // //                 author:'sonu'
// // // //             }
// // // //         ]
// // // //     }
// // // //     console.log(`hello there! welcome to ${library.library}`);
        
// // // //     console.log(`books available are:-`);
// // // //     library.books.forEach(book => {
// // // //         console.log(`${book.title},`);
        
// // // //     });




// // // let book = {
// // //     title:'Ashutosh Senapati',
// // //     year:2002,

// // //     usingThis:function(){
// // //         return(`hello ${this.title}, your birth year is ${this.year}`);
// // //     }
// // // }
// // // console.log(book.usingThis());



// // let books ={
// //     author:'unknown',
// //     published:1996,
// //     version:2014
// // }
// // for (const key in books) {
// //     console.log(`${key}:${books[key]}`);
// // }


// let demoArray = [1,2,3,4,5,6]

// for (const i of demoArray) {
//     console.log(i);
// }

let obj = {
    name:'Ashutosh Senapati',
    year:2020,

}
console.log(Object.keys(obj));
console.log(Object.values(obj));