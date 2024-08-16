const clock = document.querySelector('#clock')

setInterval(function(){              //setInterval is a method that can give output in some intervals.it takes in millieseconds as 1000ms is equals to 1 second.
    let date = new Date();              //setInterval(function(){},1000)
    clock.innerHTML = date.toLocaleTimeString()
},1000)