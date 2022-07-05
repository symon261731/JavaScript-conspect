'use strict';
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("А родители разрешили?");
    }
}


let age = prompt(`how old are you`, 18);
if (checkAge(age) === true) {
    alert(`You are welcome`);
} else {
    alert(`Go out here`);
}
*/

/*
function showPrimes(n) {
    nextPrime: for (let i = 2; i < 2; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert(i);
    }
}
*/

// second variant
/*
function showPrimes(n) {
    for (let i = 2; i < 2; i++) {
        if (!isPrime(i)) continue;

        alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
*/
/*
function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}
let age = prompt(`how old are you`, 18);
if (checkAge(age) == true) {
    alert(`You are welcome`);
} else {
    alert(`Go out here`);
}
*/



//    ЗАДАЧА НА МИНАМАЛЬНОЕ ЗНАЧЕНИЕ
/*
let a = Number(prompt("введите число a"));
let b = Number(prompt("введите число b"));
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
alert(min(a, b));
*/

//БОЛЕЕ КОРОТКИЙ И ИЗЯЩНЫЙ СПОСОБ
/*
function min(a, b) {
    return (a < b) ? a : b;
}
*/

/*
function getAnswer(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function ifYes() {
    alert("I agree with you");
}
function ifNo() {
    alert("I don't agree with you!");
}

getAnswer("Ты согласен со мной", ifYes, ifNo);
*/


// Функция стрелка

function ask(question, yes, no) {
    if (confirm(question))
        return yes();
    else
        return no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы не согласились.")
);