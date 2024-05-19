//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

function greet(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('hello world!')
        }, 2000)
    })
}

// greet().then(response => {
//     console.log(response);
//     console.log('then');
// }).catch(error => {
//     console.log(error);
//     console.log('catch');
// }).finally(()=>{
//     console.log('finally');
// })

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
    new Promise((res) => {
      setTimeout(() => {
        const data = 1;
        //   console.log(data);
        res(data);
      }, 1000);
    });
  
  const getNewData = () =>
    new Promise((res) => {
      setTimeout(() => {
        const data = 2;
        //   console.log(data);
        res(data);
      }, 1000);
});

const getAnotherData = () =>
        new Promise((res) => {
          setTimeout(() => {
            const data = 3;
            //   console.log(data);
            res(data);
          }, 1000);
});
      
const getLastData = () =>
        new Promise((res) => {
          setTimeout(() => {
            const data = 4;
            //   console.log(data);
            res(data);
          }, 1000);
});

// const promiseArr = [];
// getData().then(res => {
//     promiseArr.push(res)
//     return getNewData();
// }).then(res=>{
//    promiseArr.push(res)
//    return getAnotherData()
// }).then(res => {
//     promiseArr.push(res)
//     return getLastData()
// }).then(res=>{
//     promiseArr.push(res)
//     console.log(promiseArr);
// })

// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(res =>{
//     console.log(res);
// })

//TODO:====================03==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt('Paste value')

function checkValue(value){
    return new Promise(
        (resolve, reject)=>{
            if(isNaN(value)){
                return reject("error")
            }
            if(value % 2 === 0){
                setTimeout(()=>{
                    resolve("even")
                }, 1000)
            }
            setTimeout(()=>{
                resolve('odd')
            }, 2000)
        }
    )
}

checkValue(value).then(
    res => {
        console.log(res);
    }
).catch(err =>{
    console.log(err);
})