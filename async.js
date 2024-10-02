    // console.log(1);
    // console.log(2);
    // console.log(3);
    // console.log(4);
    // setTimeout(() => {
    //     console.log('loading Time out');

// const { reject } = require("async")

// const { reject } = require("async")

        
    // }, 4000)
    // // doSumthing();
    // console.log(6);
    // console.log(7);
    
    // function doSumthing() {
    //     console.log(5);
        
    // }

// const myPromis = () => {
//     new Promise((resolve, reject) => {
//         const success = true;
//         if(success) {
//             resolve('promise success fully')
//         }
//         else{
//             reject('promise rejected')
//         }
//     }) 
// };

const myPromis = () => {
    new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5) {
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}