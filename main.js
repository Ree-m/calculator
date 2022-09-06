
const nums = document.querySelectorAll('.num')
const input = document.querySelector('.input');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equalTo = document.querySelector('.equal');
let fourSigns = {

}

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
    operator.addEventListener('click', () => {
        let val = operator.innerHTML;
        input.innerHTML += val


    })
})

//C btn working, Makes the input empty on click.
clear.addEventListener("click", emptyInput);
function emptyInput() {
    input.textContent = "";
}

equalTo.addEventListener("click", runCal)
function runCal() {

    let inputContent = input.innerHTML;
    console.log(inputContent);

    if(inputContent.split("").indexOf("+") > 0 && inputContent.split("").indexOf("-") > 0) {
        console.log(inputContent)
        console.log( inputContent = inputContent.split(/[+-]+/))
        
        console.log('its mixed')
     }

   else if (inputContent.split("").indexOf("+") > 0) {
        console.log('it has +')
        console.log(inputContent = inputContent.split("+").reduce((a,b)=>+a + +b,0));
    }
    else if (inputContent.split("").indexOf("-") > 0) {
        inputContent = inputContent.split("-").reduce((a, b) => +a - +b),0;
        console.log('it has -')
    }
    else if (inputContent.split("").indexOf("x") > 0) {
        inputContent = inputContent.split("x").reduce((a, b) => +a * +b,1);
        console.log('it has x')
    }
    else if (inputContent.split("").indexOf("/") > 0) {
        inputContent = inputContent.split("/").reduce((a, b) => +a / +b,1);
        console.log('it has /')
    }
    else if(inputContent.split("").indexOf() > 0) {
       console.log( inputContent = inputContent.split("/+ | - /g"))
       console.log('its mixed')
    }



    input.innerHTML = inputContent

}

