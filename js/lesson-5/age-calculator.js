const input = document.querySelector('.js-input')
const btn = document.querySelector('.js-form-btn')
const resultP = document.querySelector('.js-form-result')

btn.addEventListener('click', onClick)

function onClick(){
    const userDate = new Date(input.value);
    const currentDate = new Date();//в дз треба Date.now()
    const diff = currentDate - userDate;
    const result = getAge(diff);
    resultP.textContent = `Your age is ${result} years old!`
}

function getAge(ms){
    return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25))
}