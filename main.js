document.querySelector('.numbers').addEventListener('click',putNumberInInput)
const numbers=document.querySelector('.numbers');



function putNumberInInput(){
    let val=numbers.innerText;
    alert(val)
}
