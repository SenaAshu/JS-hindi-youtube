// //generate a random color

// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
  
//   let intervalId;
//   const startChangingColor = function () {
//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);
//     }
  
//     function changeBgColor() {
//       document.body.style.backgroundColor = randomColor();
//     }
//   };
//   const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   };
  
//   document.querySelector('#start').addEventListener('click', startChangingColor);
  
//   document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  
const randomColor = function(){
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*hex.length)]
    }
    return color
}

let Starting
const startColorChange = function(){
    if(!Starting){
   Starting = setInterval(bgColorChange,1000)}
}
const bgColorChange = function(){
    document.body.style.backgroundColor = randomColor();
}

const stopColorChange = function(){
    clearInterval(Starting)
    Starting=null;
}

document.querySelector('#start').addEventListener('click',startColorChange);
document.querySelector('#stop').addEventListener('click',stopColorChange);
