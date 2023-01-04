//1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень

const getSum = (...args) => {
    let sum = 0;
    for (num of args) {
        sum += num;
    }
    return sum;
}

document.write(`Результат первой функции: ${getSum(9, 356, 1, 90, 7, 13, 5, 6, 88, -13, 0, -123)} <br><br>`)


//2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.

const birthdayCounter = () => {
    const currentDate = new Date();
    const day = parseInt(prompt("Введите ДЕНЬ своего рождения:"));
    const month = parseInt(prompt("Введите МЕСЯЦ своего рождения:"));
    const year = parseInt(prompt("Введите ГОД своего рождения:"));
    const birthday = new Date(year, month - 1, day);
    if (birthday === undefined || NaN) {
        alert("Ошибка! Введены неверные значения!");
    }
    else if (currentDate.getDate() === birthday.getDate() && currentDate.getMonth() === birthday.getMonth()) {
        alert("УРА! С днем рождения!!!");
    }
    else {
        thisYearBirthday = new Date(currentDate.getFullYear(), birthday.getMonth(), birthday.getDate());
        const age = thisYearBirthday < currentDate ? date.getFullYear() - year : currentDate.getFullYear() - year - 1;
        alert(`Ваш возраст: ${age}`);
    }
}

birthdayCounter();


//3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати

const birthdayGreater = () => {
    alert("УРА! С днем рождения!!!");
}

const birthdayCounterV2 = (callbackFn) => {
    const currentDate = new Date();
    const day = parseInt(prompt("Введите ДЕНЬ своего рождения:"));
    const month = parseInt(prompt("Введите МЕСЯЦ своего рождения:"));
    const year = parseInt(prompt("Введите ГОД своего рождения:"));
    const birthday = new Date(year, month - 1, day);
    if (birthday === undefined || NaN) {
        alert("Ошибка! Введены неверные значения!");
    }
    else if (currentDate.getDate() === birthday.getDate() && currentDate.getMonth() === birthday.getMonth()) {
        callbackFn();
    }
    else {
        thisYearBirthday = new Date(currentDate.getFullYear(), birthday.getMonth(), birthday.getDate());
        const age = thisYearBirthday < currentDate ? date.getFullYear() - year : currentDate.getFullYear() - year - 1;
        alert(`Ваш возраст: ${age}`);
    }
}

birthdayCounterV2(birthdayGreater);


//4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17
// 2000 -> 20

const getCentury = (n) => {
    return n % 100 == 0 ? (n / 100) : Math.floor(n / 100) + 1;
}


const year = parseInt(prompt("Введите любой год:"));
if (year === NaN || undefined || year <= 0) {
    alert("Ошибка! Неверное значение!");
} else {
    document.write(`${year} год - это ${getCentury(year)} век`);
}


//5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )

const month = parseInt(prompt("Введите любой месяц (ЦИФРОЙ!)") - 1);
let nextMonth;
if (month === undefined || NaN || month < 0 || month >= 12) {
    alert("Ошибка! Введено неверное значение!");
} else if (month === 11) {
    nextMonth = 0;
} else {
    nextMonth = month + 1;
}

const getDaysInMonth = (n) => {
    if (n === undefined) {
        return;
    }
    switch(n) {
        case 0:
        case 2: 
        case 4: 
        case 6: 
        case 7:
        case 9:
        case 11:
            return "31 день";
        case 3:
        case 5:
        case 8:
        case 10:
            return "30 дней";
        case 1:
            return "28 дней";
    }
}

document.write(`Вы ввели месяц ${new Date(2023, month, 4).toLocaleString('default', { month: 'long' })}, в нем - ${getDaysInMonth(month)}. Следующий месяц - ${new Date(2023, nextMonth, 4).toLocaleString('default', { month: 'long' })}, в нем - ${getDaysInMonth(nextMonth)}`);