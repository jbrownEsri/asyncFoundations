//ASSIGNMENT: Create a countdown timer that takes a number (seconds) and when the timer reaches zero, print "Ring Ring Ring."

function countDown(seconds) {
    setTimeout(function () {
        seconds--;
        if (seconds === 0) {
            console.log("Ring Ring Ring");
            return;
        } else {
            console.log(": ", seconds);
            countDown(seconds);
        }
    }, 1000)
}


//simple callback:
function cb() {
    console.log("from the callback.");
}

function call(c) {
    console.log("from the main");
    c();
}


call(cb);

countDown(5);