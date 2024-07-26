const form = document.querySelector('form')

form.addEventListener('submit',function(e){
e.preventDefault()           // to avoid default actions

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result =(document.querySelector('#results'))

if(height === isNaN(height) || height<0 || ''){
    result.innerHTML=`Please enter a valid height`
}
else if(weight === isNaN(weight) || weight<0 || ''){
    result.innerHTML='Please enter a valid weight'
}
else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2) //---->This will give upto 2 decimal numbers
    // result.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.6){
        result.innerHTML=`${bmi}, You are Under Weight`
    }
    else if(bmi>=18.6 && bmi<=24.9){
        result.innerHTML=`${bmi}, You are normal`
    }
    else{
        result.innerHTML = `${bmi}, You are Overweight`
    }
}
})