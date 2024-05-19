const images = [
    'url("https://picsum.photos/id/1015/1920/1080")',
    'url("https://picsum.photos/id/1018/1920/1080")',
    'url("https://picsum.photos/id/1025/1920/1080")',
  ];

const body = document.body;

body.style.backgroundImage = images[images.length - 1]

let count = 0;

function changeBg(){
    body.style.backgroundImage = images[count];
    count += 1;
    if(count === images.length){
        count = 0
    }
}

setInterval(changeBg, 2000)


// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// }, 2000)
// console.log(3);

// 5. Функція startTimer повинна логувати кожен елемент масиву один раз на секунду. Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку поки не дійде до першого елемента, потім зупинити процес.

function startTimer(array) {
    let index = 0
    let reverse = false;
    const interval = setInterval(()=>{
        console.log(array[index]);
        if(!reverse){
            index += 1
            if(index === array.length){
                index -= 1;
                reverse = true;
            } 
        }else{
            index -= 1
            if(index < 0){
                console.log('finish');
                clearInterval(interval)
            } 
        }
        
    }, 1000)
    
}

// Приклад виклику функції startTimer з масивом ['a', "b", 'c', "d", 'f']
startTimer(['a', 'b', 'c', 'd', 'f']);