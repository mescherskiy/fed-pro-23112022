//1. отримати 2 цифрових значення і вивести результат математичнихх операцій в console.

let x = parseInt(prompt("Введите первое число:", 0));
let y = parseInt(prompt("Введите второе число:", 0));

console.log("x + y = " + (x + y));
console.log("x - y = " + (x - y));
console.log("x * y = " + (x * y));
console.log("x / y = " + (x / y));


// 2. Отримати 2 текстових значення і вивсести за допомогою document .write  "User name: FirstVar  User last name SecondVar " ( firstVar, secondVar значення які отримали ) 

let firstName = prompt("Введите Ваше имя:");
let lastName = prompt("Введите фамилию:");

document.write("Username: " + firstName + '<br/>');
document.write("Surname: " + lastName);


// 3. отримати текстове  значення і виконати перевіку: якщо  uk повернути true, якщо ru  повернути false

let choose = prompt("Введите ru или uk:");
console.log(choose == "uk" || choose == "Uk" || choose == "UK");


// 4. отримати 2 числових значення якщо перше більше 20 а друге більше 30 то вивстести true, якщо одна з умов не відповідає вивсести false

let a = parseInt(prompt("Введите первое число:"));
let b = parseInt(prompt("Введите второе число:"));

console.log(a > 20 && b > 30);