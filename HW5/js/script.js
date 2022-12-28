//1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. Метод повинен бути винесений в прототип.

function User (firstName, lastName, age) {
    User.id++;
    this.id = User.id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    User.info = (user) => `ID = ${user.id}<br>Name: ${user.firstName}<br>Last name: ${user.lastName}<br>Age: ${user.age}<br>`;
}

User.id = 0;

const user1 = new User("Sasha", "Mesch", 34);
document.write(User.info(user1)+"<br>");

const user2 = new User("Alex", "Blabla", 12);
document.write(User.info(user2)+"<br>");
document.write(User.info(user1)+"<br>");


//2)Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя , вік користувача.ІD не міняється

User.setFirstName = (user, firstName) => user.firstName = firstName;
User.setLastName = (user, lastName) => user.lastName = lastName;
User.setAge = (user, age) => user.age = parseInt(age);

User.setFirstName(user1, "Alexandr");
User.setLastName(user1, "Mescherskiy");
User.setAge(user1, 35);
document.write(User.info(user1));
document.write("<hr><hr>");


//3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, переметра, та визначення діагоналі
// https://ua.onlinemschool.com/math/formula/rectangle/

function Figure(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.shape = sideA == sideB ? "Square" : "Rectangle";

    Figure.info = (figure) => `Shape: ${figure.shape}, side A: ${figure.sideA}, side B: ${figure.sideB}<br>`;
    Figure.getArea = (figure) => figure.sideA * figure.sideB;
    Figure.getPerimeter = (figure) => figure.shape == "Square" ? figure.sideA * 4 : figure.sideA * 2 + figure.sideB * 2;
    Figure.getDiagonal = (figure) => Math.sqrt(Math.pow(figure.sideA, 2) + Math.pow(figure.sideB, 2));
}

const sqr = new Figure(3,3);
const rect = new Figure(5,8);

document.write(`${Figure.info(sqr)} Area: ${Figure.getArea(sqr)}<br> Perimeter: ${Figure.getPerimeter(sqr)}<br> Diagonal: ${Figure.getDiagonal(sqr)}<br><br>`);
document.write(`${Figure.info(rect)} Area: ${Figure.getArea(rect)}<br> Perimeter: ${Figure.getPerimeter(rect)}<br> Diagonal: ${Figure.getDiagonal(rect)}<br><br>`);

document.write("<hr><hr>");


//4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.

let userName = prompt("Введите имя:");
let consoleName = userName.toUpperCase();
let cut = consoleName.slice(1, -1);
let paste = cut.toLowerCase();
consoleName = consoleName.replace(cut, paste);
console.log(consoleName);


//5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину більше 10 то відрізає все після 10 і додає 3 крапки

const trimmer = (str) => {
    str = str.trim();
    if (str.length > 10) {
        str = str.slice(0,10).padEnd(13, '.');
    }
    return str;
}
document.write(trimmer("    sdfg gfdghdsh sdh h dsh s d sh      "));