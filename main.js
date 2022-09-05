document.querySelectorAll('.leftPanel').addEventListener('click', putNumberInInput)
const numbers = document.querySelector('.numbers');
const input =document.querySelector('.input');



function putNumberInInput() {
    // const input =document.querySelector('.input');

    let val = numbers.innerText;
    alert(val)
    
    input.innerHTML=val

    


    
}
