const button = document.querySelectorAll('.button') 
// console.log(button);
const body  = document.querySelector('body')
// console.log(body);

button.forEach(function(buttons){
    // console.log(buttons);
    buttons.addEventListener('click',function(e){                //.addEventListener - will add a event
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})
