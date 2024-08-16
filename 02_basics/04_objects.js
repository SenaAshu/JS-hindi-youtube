const tinderuser = new Object()
// console.log(tinderuser);
tinderuser.name = 'Maxi'
tinderuser.id = 'abc123'
tinderuser.isloggedin = false
// console.log(tinderuser);

const anotheruser = {
    email : "maxi@gmail.com",
    
        fullname:{
            userfullname:{
                Firstname: "Ashutosh",
                Lastname : "Senapati"
            }

        }
    }
// console.log(anotheruser);
// console.log(anotheruser.fullname);
// console.log(anotheruser.fullname.userfullname.Lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        name:"Maxi",
        roll:198
    },
    {
        name:"Max",
        roll:197
    },
    {
        name:"Maxiii",
        roll:196
    }
]
// console.log(user);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); //Keys
// console.log(Object.values(tinderuser)); //values
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty("isloggedin"));


let user2 = {
    username : "Maxi123",
    role:"Software Associate",
    Salary:"25000"
}
// console.log(user2.Salary);
// user2["role"]=user2["AppointedAs"]
// user2.role = "AppointedAs"
// // console.log(AppointedAs);
// console.log(user2);

// user2.userName = user2.username
// delete user2.username
// console.log(user2);

// const AppointedAs = "AppointedAs";

// user2[AppointedAs] = user2.role;

// delete user2.role;

// console.log(user2);
