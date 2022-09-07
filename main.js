
const nums = document.querySelectorAll('.num')
const input = document.querySelector('.input');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equalTo = document.querySelector('.equal');


// This makes it so every button can hear the click and runs a callback.In the callback,the number is taken as val and put into the input.

nums.forEach(number => {
    number.addEventListener('click', (event) => {

        let val = number.innerHTML;
        console.log(val)
        input.innerHTML += val
    })

})
// The opertor btns can hear the click and run a callback. in the callback, the operator is taken as val and put into the input.

operators.forEach(operator => {
    operator.addEventListener('click',()=>{
        let operatorVal = operator.innerHTML;
        let inputContent=input.innerHTML
        
        console.log(operatorVal)
        
//making it so that i cant type an operator after an operator. Like,i cant type ++ or +-* 

        if(inputContent[inputContent.length-1]=="+" || inputContent[inputContent.length-1]=="-" || inputContent[inputContent.length-1]=="*"  || inputContent[inputContent.length-1] =="/" ){
         return input.innerHTML=input.innerHTML
        }
         input.innerHTML+=operatorVal
            
 })
})



//C btn working, Makes the input empty on click.
clear.addEventListener("click", emptyInput);
function emptyInput() {
    input.textContent = "";
}
// To solve the operations in the input.
equalTo.addEventListener("click", runCal)
function runCal() {
    let inputCalc=eval(input.innerHTML);
    input.innerHTML=inputCalc;
    return inputCalc;

}
