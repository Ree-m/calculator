
// const numbers = document.querySelectorAll('.numbers');
const nums=document.querySelectorAll('.num')


const input =document.querySelector('.input');

// This makes it so every button can hear the click and runs a callback.In the callback,the number is taken as val and put into the input.

nums.forEach(number=>{
    number.addEventListener('click',(event)=>{
        let val= number.innerHTML;
        console.log(val)
        input.innerHTML=val
    })

})



