//1. дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням. Повині бути команди (додавання, множення, ділення, віднімання)

let x = parseFloat(prompt("Input first number:", 0));
let y = parseFloat(prompt("Input second number:", 0));
let operation = prompt("Choose operation: '+' or '-' or '*' or '/'", "+");
let result = 0;

if (operation == "+") {
    result = x + y;
} else if (operation == "-") {
    result = x - y;
} else if (operation == "*") {
    result = x * y;
} else if (operation == "/") {
    if (y != 0) {
        result = x / y;
    } else {
        alert("You can't divide by zero!");
        result = "Divide by zero";
    }

} else {result = "Wrong operation"};

console.log(result);
console.log("-----------------------------------------------");


//2. за допомогою циклу вивести в консоль всі парні значення числа 20

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("-----------------------------------------------");


//3. використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B 

let A = parseFloat(prompt("Input number A:", 0));
let B = parseFloat(prompt("Input number B:", 0));
let sum = 0;

if (A < B) {
    for (let i = A; i <= B; i++) {
        sum += i;
    }
} else {
    alert("Error! 'B' must be greater than 'A'!");
}
console.log(sum);
console.log("-----------------------------------------------");


//4. зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

x = parseFloat(prompt("Input any number:", 0));
y = parseFloat(prompt("Input any second number:", 0));

if (x > y) {
    for (let i = x; i >= y; i--) {
        console.log(i);
    }
} else if (y > x) {
    for (let i = y; i >= x; i--) {
        console.log(i);
    }
} else {
    console.log(x);
}
console.log("-----------------------------------------------");


//5. отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення. Наприкда а=2 і в=2 буде ось така фігура
//**
//**

let height = parseFloat(prompt("Input first number: ", 0));
let width = parseFloat(prompt("Input second number: ", 0));
let row = "";

if (height && width > 0) {
    for (let i = 1; i <= width; i++) {
        row += "*";
    }

    for (let k = 1; k <= height; k++) {
        console.log(row);
    }

} else {alert("Error! Each number must be more than 0")};

console.log("-----------------------------------------------");


//6. напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"

let login = prompt("Enter login: ");
let password = prompt("Enter password: ");
if (login == "admin" || password == "12345") {
    alert("Welcome in the system!");
} else {
    alert("Wrong login or password :(");
}

console.log("-----------------------------------------------");


//7. отримати 3 значення від користувача і порахувати середнє значення цих значень

let n1 = parseInt(prompt("Enter first number: ", 0));
let n2 = parseInt(prompt("Enter second number: ", 0));
let n3 = parseInt(prompt("Enter third number: ", 0));

console.log("Middle value is: " + ((n1 + n2 + n3)/3));

console.log("-----------------------------------------------");


//8. Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) створити змінну яка отримує true якщо вік більше 18  i false якщо менше

let age = parseInt(prompt("What is your age?"));
let permission = age >= 18 ? true : false;
if (permission) {
    alert("Welcome!");
} else {alert("Sorry, only 18+")};

console.log("-----------------------------------------------");


//9. створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planet = prompt("Enter name of any planet: ");

switch (planet) {
    case "Mercury":
    case "mercury":
    case "Venus":
    case "venus":
    case "Earth":
    case "earth":
    case "Mars":
    case "mars":
    case "Jupiter":
    case "jupiter":
    case "Saturn":
    case "saturn":
    case "Uranus":
    case "uranus":
    case "Neptune":
    case "neptune":
        alert("This planet in the solar system");
        break;

    default:
        alert("This planet IS NOT in the solar system");
}

console.log("-----------------------------------------------");


//10. Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% і вивести значення якщо більше 3000 то порахувати знижку 5% і якщо більше 10000 то порахувати знижку 7% в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"

let n = parseInt(prompt("Enter sum (must be more than 0):"));
let discount = 1;

if (n >= 100 && n < 3000) {
    discount = 3;
} else if (n >= 3000 && n < 10000) {
    discount = 5;
} else if (n >= 10000) {
    discount = 7;
}

if (discount == 1) {
    alert(`You don't have a discount. Total sum is $${n}`);
} else if (discount > 0 || discount < 1) {
    alert(`Your discount is ${discount}%. Total sum is $${n - (n / 100 * discount)}`);
}

console.log("-----------------------------------------------");


//11. отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає . Наприклад корова: му-му  і т.д

let animal = prompt("Enter any animal");

switch (animal) {
    case "Cat":
    case "cat":
        alert("Meoooooooooow!");
        break;
    case "Dog":
    case "dog":
        alert("Woof-woof!");
        break;
    case "Cow":
    case "cow":
        alert("Moooooooooooooooooooo!");
        break;
    case "Pig":
    case "pig":
        alert("Oink-oink!");
        break;
    case "Duck":
    case "duck":
        alert("Quack-quack!");
        break;
    case "Owl":
    case "owl":
        alert("Who-who?!");
        break;
    case "Bird":
    case "bird":
        alert("Tweet-tweet");
        break;
    case "Duck":
    case "duck":
        alert("Quack-quack!");
        break;
    case "Mouse":
    case "mouse":
        alert("Squeak-squeak-squeak!");
        break;
    default:
        alert("Don't know this animal");

}

console.log("-----------------------------------------------");