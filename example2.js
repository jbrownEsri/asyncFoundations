// var arr = [1, 2, 3, 4, 5, 6];

// function double(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] * 2);
//     }
// }
// double(arr);

// arr.forEach(function (number) {
//     console.log(number * 2)
// })

// function forEach(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// var strings = ["my", "forEach", "example"];

// var results = "";

// forEach(strings, function (str, index, array) {
//     if (array.length - 1 !== index) {
//         results += str + " ";
//     } else {
//         results += str + "!!!"
//     }
//     console.log("str: " + str + " | index: " + index + " | results: " + results)
// })

//findIndex: Returns the index of the first element in the array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value.

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            console.log("Searching for " + arr[i] + ". Found at index: " + i);
            return i;
        }
    }
    console.log("no results found: " + "-1")
    return -1;
}

//EXAMPLE
// var arr = [3, 4, 6, 2, 1];
// findIndex(arr, function (num, index, array) {
//     return num === index;
// });

//EXAMPLE
var arr = [5, 11, 13, 8, 6, 7];
findIndex(arr, function (num, index, array) {
    return num % 2 === 0;
});

// //EXAMPLE
// var langs = ["Java", "C++", "Python", "Ruby"];
// findIndex(langs, function (lang, index, arr) {
//     return lang === "JavaScript";
// });
//will always return falsy value, which returns -1.