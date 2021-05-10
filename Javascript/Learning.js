"use strict"
let age = prompt ("Когда вы родились?", 18);

if (age < 3) {
    message = "Hi";
} else if (age < 18) {
    message = "How are you?";
} else if (age < 100) {
    message = "Good age";
} else {
    message = "Old enough";
}

alert(message);

