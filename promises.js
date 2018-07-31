//**************************
//         PROMISES
//**************************



// var p1 = new Promise(function (resolve, reject) {
//     var num = Math.random();
//     if (num < 0.5) {
//         resolve(num)
//     } else {
//         reject(num)
//     }
// })

// p1.then(function (result) {
//         console.log("Success: ", result);

//     })
//     .catch(function (error) {
//         console.log("ERROR: ", error)
//     })


// var promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         var randomInt = Math.floor(Math.random() * 10);
//         resolve(randomInt);
//     }, 1000);
// });

// promise.then(function (data) {
//     console.log("Random int passed to resolve from promise 1: ", data);
// })

// //***************************
// //   CALLBACK HELL EXAMPLE
// //***************************

// //*Callback hell example:
// var counter = 0;
// setTimeout(() => {
//     counter++;
//     console.log("Counter: ", counter);
//     setTimeout(() => {
//         counter++;
//         console.log("Counter: ", counter);
//         setTimeout(() => {
//             counter++;
//             console.log("Counter: ", counter);
//         }, 3000);
//     }, 2000);
// }, 1000);

// //**************************
// //      PROMISE CHAINS
// //**************************

// //If a promise inside a .then returns back a new promise, you can chain the promises together.

// //example:

// var promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         randomInt = Math.floor(Math.random() * 10);
//         resolve(randomInt);
//     }, 500);
// });

// promise2.then((data) => {
//         console.log("Random int passed to resolve from promise 2: ", data);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(Math.floor(Math.random() * 10));
//             }, 3000);
//         });
//     })
//     .then((data) => {
//         console.log("Second random int passed to resolve in Promise 2: ", data);
//     });

// //VALUES PASSED BACK VIA 'RETURN' WILL BE PASSED INTO THE NEXT .then CALLBACK.

// var promise3 = new Promise((resolve, reject) => {
//         console.log("Inside Promise declaration.")
//         resolve(5);
//     })
//     .then((data) => {
//         console.log("Inside first Promise .then function: ", data)
//         return data * 2;
//     })
//     .then((data) => {
//         console.log("Inside second Promise .then function: ", data)
//         return data + 20;
//     })
//     .then((data) => {
//         console.log("Inside third Promise .then function: ", data)
//         return;
//     })

//EXERCISE: REFACTOR CALLBACK HELL INTO PROMISES PARADISE:/

var counting = new Promise((resolve, reject) => {
        count = 0;
        resolve(
            setTimeout(() => {
                ++count;
                console.log("count: ", count);
            }, 1000)
        )
    })
    .then(() => {
        return setTimeout(() => {
            ++count;
            console.log("count: ", count);
        }, 2000)
    })
    .then(() => {
        return setTimeout(() => {
            ++count;
            console.log("count: ", count);
        }, 3000)
    })