"use strict";

let answer1 = prompt("How is your day going");

//console.log(answer1);

if (true) {
    console.log("In a condition that executes always.");
}

if (false) {
    console.log("In a condition that executes never!");
}

if (Math.random() >0.5) {
    console.log("This condition maybe runs!")
}

answer1 = answer1.toLowerCase();
if (answer1 == Good!) {
    console.log("Im glad to hear that!")
}

else if (answer1 == "Good!") {
    console.log("That's excellent!")
} else if (answer1 == "Just ok" || answer1 == "Bad") {
    console.log(answer1 + "? I'm sorry to hear that");
} else if (answer1 == "Just ok") {
    console.log(Ok is better then bad!);
} else {
    console.log(answer1 + Absolutely delightful);
}

switch (answer1) {
    case "Good!":
    console.log("Thats excellent!");
    break;
    case "Just ok":
        console.log("Thats ok. It happens");
    break;
    case "Bad":
        console.log("I hope it gets better!");
        break;
    default:
        console.log(answer1 + "says 'Keep on killin it!'")
    }

