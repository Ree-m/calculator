
const nums=document.querySelectorAll('.num')
const input =document.querySelector('.input');
const operators=document.querySelectorAll('.operator');
const clear=document.querySelector('.clear');

// This makes it so every button can hear the click and runs a callback.In the callback,the number is taken as val and put into the input.

nums.forEach(number=>{
    number.addEventListener('click',(event)=>{

        let val= number.innerHTML;
        console.log(val)
        input.innerHTML+=val
    })

})
// The opertor btns can hear the click and run a callback. in the callback, the operator is taken as val and put into the input.

operators.forEach(operator=>{
    operator.addEventListener('click',()=>{
        let val=operator.innerHTML;
        input.innerHTML+=val


    })
})

// 
clear.addEventListener("click",emptyInput);
function emptyInput(){
    input.textContent="";
}



