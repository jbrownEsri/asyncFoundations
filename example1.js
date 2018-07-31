// function callback() {
//     console.log("coming from callback.");
// }

// function higherOrder(fn) {
//     console.log("About to call callback");
//     fn();
//     console.log("Callback has been invoked");
// }

// higherOrder(callback);


// function sendMessageConsole(message) {
//     console.log(message);
// }

// function sendMessageAlert(message) {
//     console.log(message);
// }

// function sendMessageConfirm(message) {
//     return confirm(message);
// }

// sendMessageAlert("Lots of duplication");

//reduce the code using callbacks.

// function sendMessage(message, callback) {
//     return callback(message);
// }

// sendMessage("Message for console", console.log);

// sendMessage("Message for alert", console.log);

// var answer = sendMessage("Are you sure??", confirm);

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet("Tim", upperCaseName);