// // // // // // // // // // // // // // // // // // // // // // // // // let arandomnumber = null
// // // // // // // // // // // // // // // // // // // // // // // // // console.log(typeof arandomnumber);
// // // // // // // // // // // // // // // // // // // // // // // // // console.log(arandomnumber);

// // // // // // // // // // // // // // // // // // // // // // // // let number = 33
// // // // // // // // // // // // // // // // // // // // // // // // let stringnumber = String(number)
// // // // // // // // // // // // // // // // // // // // // // // // console.log(typeof number);
// // // // // // // // // // // // // // // // // // // // // // // // console.log(typeof stringnumber);
// // // // // // // // // // // // // // // // // // // // // // // // console.log(stringnumber);
// // // // // // // // // // // // // // // // // // // // // // // // console.log(null==null);

// // // // // // // // // // // // // // // // // // // // // // // let myfunction = function(){
// // // // // // // // // // // // // // // // // // // // // // //     console.log("Hello");
// // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // myfunction()


// // // // // // // // // // // // // // // // // // // // // // let obj1 = 
// // // // // // // // // // // // // // // // // // // // // // {
// // // // // // // // // // // // // // // // // // // // // //     name:'Ashutosh',
// // // // // // // // // // // // // // // // // // // // // //     roll:198
// // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // let obj2 = obj1
// // // // // // // // // // // // // // // // // // // // // // console.log(obj1);
// // // // // // // // // // // // // // // // // // // // // // obj2.roll = 199
// // // // // // // // // // // // // // // // // // // // // // console.log(obj2);

// // // // // // // // // // // // // // // // // // // // // let newString = new String('Ashutosh')
// // // // // // // // // // // // // // // // // // // // // console.log(newString[0]);
// // // // // // // // // // // // // // // // // // // // // console.log(newString.charAt(3));
// // // // // // // // // // // // // // // // // // // // // console.log(newString.indexOf('h'));
// // // // // // // // // // // // // // // // // // // // // console.log(newString.substring(0,4));


// // // // // // // // // // // // // // // // // // // // const url = 'https:/courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197157'
// // // // // // // // // // // // // // // // // // // // console.log(url.includes('days'));

// // // // // // // // // // // // // // // // // // // let num = 4.2
// // // // // // // // // // // // // // // // // // // // console.log(Math.abs(num));
// // // // // // // // // // // // // // // // // // // // console.log(Math.round(num));
// // // // // // // // // // // // // // // // // // // // let num2 = [1,2,3,4]
// // // // // // // // // // // // // // // // // // // // console.log(Math.min(1,2,34,33));
// // // // // // // // // // // // // // // // // // // // console.log(Math.round(Math.random()+1));


// // // // // // // // // // // // // // // // // // const heros = new Array('maxi','soumya','kamal')
// // // // // // // // // // // // // // // // // // // console.log(heros);

// // // // // // // // // // // // // // // // // let arr1 = [1,2,3,4,5,6]
// // // // // // // // // // // // // // // // // let arr2 = [1,2,3,4,5,6]
// // // // // // // // // // // // // // // // // console.log(arr1.slice(0,3));               //<----------- slice()
// // // // // // // // // // // // // // // // // console.log(arr1);
// // // // // // // // // // // // // // // // // console.log(arr2.splice(0,3));               //<----------- splice()
// // // // // // // // // // // // // // // // // console.log(arr2);

// // // // // // // // // // // // // // // // let huh = [1,2,3,4,5]
// // // // // // // // // // // // // // // // let nuh = [6,7,8,9,10]
// // // // // // // // // // // // // // // // // let huhnuh = huh.concat(nuh)
// // // // // // // // // // // // // // // // // console.log(huhnuh);
// // // // // // // // // // // // // // // // let huhnuh = [...huh,...nuh]               //<----------- spread
// // // // // // // // // // // // // // // // console.log(huhnuh);

// // // // // // // // // // // // // // // let sc1 = 100
// // // // // // // // // // // // // // // let sc2 = 200
// // // // // // // // // // // // // // // let sc3 = 300
// // // // // // // // // // // // // // // let final = Array.of(sc1,sc2,sc3)              //<-------------Array.of
// // // // // // // // // // // // // // // console.log(final);

// // // // // // // // // // // // // //                                    // OBJECT
// // // // // // // // // // // // // // let user = function(){

// // // // // // // // // // // // // // }

// // // // // // // // // // // // // let user = new Object()
// // // // // // // // // // // // // user.name = "maxi"
// // // // // // // // // // // // // user.id = 228
// // // // // // // // // // // // // user.roll = 'engineer'
// // // // // // // // // // // // // user.mail = 'maxi@gmail.com'
// // // // // // // // // // // // // console.log(user);


// // // // // // // // // // // // const user = {
// // // // // // // // // // // //     name:'maxi',
// // // // // // // // // // // //     fullname:{
// // // // // // // // // // // //         Username:{
// // // // // // // // // // // //             firstName:'Ashutosh',
// // // // // // // // // // // //             lastName:'Senapati'
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(user.fullname);
// // // // // // // // // // // // // console.log(user.fullname.Username.firstName);
// // // // // // // // // // // // const{fullname:{Username:{firstName:first}}} = user
// // // // // // // // // // // // console.log(first);


// // // // // // // // // // //                                      FUNCTION
// // // // // // // // // // // function maxwell(){
// // // // // // // // // // //     console.log('m');
// // // // // // // // // // //     console.log('a');
// // // // // // // // // // //     console.log('x');
// // // // // // // // // // //     console.log('w');
// // // // // // // // // // //     console.log('l');
// // // // // // // // // // //     console.log('l');
// // // // // // // // // // // }
// // // // // // // // // // // maxwell()

// // // // // // // // // // // const user =
// // // // // // // // // // // {
// // // // // // // // // // //     name:'maxi',
// // // // // // // // // // //     roll:198,
// // // // // // // // // // //     welcomeMessage:function(){
// // // // // // // // // // //         console.log("Welcome");
// // // // // // // // // // //     }

// // // // // // // // // // // }
// // // // // // // // // // // console.log(user);


// // // // // // // // // // function userlogin(username){
// // // // // // // // // //     if(username === undefined){
// // // // // // // // // //         console.log("Please enter a valid name");
// // // // // // // // // //     }
// // // // // // // // // //     else{
// // // // // // // // // //         console.log(`${username}, You have logged in successfully`);
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // userlogin('Maxi')

// // // // // // // // // let count = function(num1){
// // // // // // // // //     console.log(num1);
// // // // // // // // // }
// // // // // // // // // count(300,400,100)

// // // // // // // // // let count2 = function(...num2){                    //<------- rest operator
// // // // // // // // //     return num2
// // // // // // // // // }
// // // // // // // // // console.log(count2(300,400,500))

// // // // // // // // // let count3 = function(val1,val2,...val3){
// // // // // // // // //     return val1,val2,val3
// // // // // // // // // }
// // // // // // // // // console.log(count3(20,43,53,98,37,11,67,55));

// // // // // // // // const addtwo = (num1,num2)=>{
// // // // // // // //     console.log(num1+num2)
// // // // // // // // }
// // // // // // // // addtwo(5,5)

// // // // // // // ((name)=>{
// // // // // // //     console.log(`${name}, Welcome`);                //IIFE-Immediately Invoked Function Expressions
// // // // // // // })('maxi')

// // // // // // const map = new Map()
// // // // // // map.set('IN','India')
// // // // // // map.set('FR','France')
// // // // // // map.set('CN','China')                                   // map
// // // // // // map.set('Rs','Russia')
// // // // // // console.log(map);

// // // // // let arr = [1,2,3,4,56,6]
// // // // // for (const i of arr) {                                      //for of
// // // // //     console.log(i);                                         //It is used in Array
// // // // // }

// // // // let obj = 
// // // // {
// // // //     js:'JavaScript',
// // // //     Css:'Cascading Style sheet',
// // // //     SQL:'Structured Query language'
// // // // }
// // // // for (const key in obj) {                                         //for in
// // // //     console.log(key);                                            //used in object
        
// // // //     }

// // // const map = new Map()
// // // map.set('IN','India')
// // // map.set('FR','France')
// // // map.set('CN','China')                                 
// // // map.set('Rs','Russia')

// // // for (const i of map) {
// // //     console.log(i);
// // // }

// // // for (const [key,value] of map) {
// // //     console.log(`${key}:-${value}`);
// // // }

// // const arr=[233,876,112]
// // arr.forEach(function(text,index,i,j){                //<------foreach
// //     console.log(text,index,i,j);
// // })

// // let nums = [1,2,3,4,5,6,7,8,9,0]
// // let newnums = []

// // nums.forEach((num)=>{
// //     if(num>=4){
// //         newnums.push(num)                              //<--------filter()
// //     }
// // })
// // console.log(newnums);

// let nums = [1,2,3,4,5,6,7,8,9,0]
// let multiplenum = nums.map((num)=>num*10)
//                 .map((num)=>(num+2))                        //<-------.map()
//                     .map((num)=>(num*2))
//                     .filter((num)=>(num>30))
// console.log(multiplenum);
