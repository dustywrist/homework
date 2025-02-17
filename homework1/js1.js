document.addEventListener("DOMContentLoaded", function() {

    let str = 'лохчушпан';
    alert(str[0]);
    alert(str[1]);
    alert(str[4]);

    let a = parseInt(prompt("сколько сегодня плакал:"));
    let b = parseInt(prompt("сколько сегодня смеялся:"));
    console.log(a > 0 || b > 0);
    

    let age = parseInt(prompt("сколько тебе лет, чушпан:"));
    if (age >= 18) {
        console.log("пацан");
    } else {
        console.log("чушпан");
    }
    

    let number = parseInt(prompt("сколько чушпанов набил:"));
    let isEven = number % 2 === 0;
    });