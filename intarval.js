console.log(1);
console.log(2);
// setTimeout(() => {
//     console.log(3);

// }, 4000)
console.log(4);
console.log(5);

// let a = 0;
// const clckId = setInterval(() => {
//     a++;
//     if(a > 6) {
//         clearInterval(clckId)
//     }
//     console.log(clckId, a)
// }, 2000)

// setTimeout(() => {
//     console.log(3);
// }, 2000)
let num = 0;
const setTime = setInterval(() => {
    num++;
    if(num >= 10){
        clearInterval(setTime)
    }
    console.log(setTime,num);
}, 1000);