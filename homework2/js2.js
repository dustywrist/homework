document.addEventListener("DOMContentLoaded", function() {

    /* задача 1 */
    
        let age = parseInt(prompt("Во сколько лет ты бы хотел умереть?:"));
        if (age < 20) {
            alert("пессимист");
        } else {
            alert("реалист");
        }
        
    /* задача 2 */
    
    let num1 = parseInt(prompt("напиши первое число:"));
    let num2 = parseInt(prompt("напиши второе число:"));
    
    if (num1 > num2) {
        alert("первое число больше");
    } else if (num2 > num1) {
        alert("второе число больше");
    } else {
        alert("числа равны");
    }
    
    /* задача 3  */
    
    let number = parseInt(prompt("бупкни число:"));
    
    if (number % 2 === 0) {
        alert("это чётное число");
    } else {
        alert("это нечётное число");
    }
    
    /* задача 4 */
    
    const secretNumber = 3;
    let guess = parseInt(prompt("угадай число от 1 до 10:"));
    
    if (guess === secretNumber) {
        alert("молодец, ты угадал!");
    } else {
        alert("в следующий раз получится!");
    }
    
    /* задача 5 */
    
    let login = prompt("введите логин:");
    let password = prompt("введите пароль:");
    
    if (login === "admin" && password === "12345") {
        alert("лошпед привет!");
    } else {
        alert("о так ты еще и тупой");
    }
    
    /* задача 6 */
    
    let year = parseInt(prompt("введите год:"));
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert("это високосный год");
    } else {
        alert("это не високосный год");
    }
    
    /* задача 7 */
    
    let number2 = parseInt(prompt("введите число:"));
    
    if (number2 > 100) {
        alert("люблю больших");
    } else if (number2 < 100) {
        alert("не люблю больших");
    } else {
        alert("100!");
    }
    
    });