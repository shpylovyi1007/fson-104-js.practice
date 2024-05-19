const checkbox = document.querySelector("#theme-switch")
const body = document.body
const LOCALSTORAGE_KEY = 'switcher'
checkbox.addEventListener('click', changeTheme)
document.addEventListener('DOMContentLoaded', renderPage)

function changeTheme (event){
    console.log(event.target.checked);
    if(event.target.checked){
        body.classList.replace('light', 'dark')
        localStorage.setItem(LOCALSTORAGE_KEY, 'dark')
    } else{
        body.classList.replace('dark', 'light')
        localStorage.setItem(LOCALSTORAGE_KEY, 'light')
    }
}

function renderPage(){
   const currentTheme = localStorage.getItem(LOCALSTORAGE_KEY)
   if(currentTheme === 'dark'){
    body.classList.replace('light', 'dark')
    checkbox.checked = true
   } else{
    body.classList.replace('dark', 'light')
   }
}
//Object in localstorage

// const userData ={
//     userName: 'Mango',
//     message: 'Hello!'
// }

// const LS_KEY = 'userData'

// localStorage.setItem(LS_KEY, JSON.stringify(userData))

// const LS_DATA = JSON.parse(localStorage.getItem(LS_KEY)) 
// console.log(LS_DATA);