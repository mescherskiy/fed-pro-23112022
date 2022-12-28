// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

const userWallet = {
    USD: 250.0,
    EURO: 400.0,
    UAH: 10000.0
};

const bank = [
    {
        name: "USD",
        buy: 40.50,
        sell: 40.00
    },
    {
        name: "Euro",
        buy: 42.45,
        sell: 41.80
    }
]

document.write(`<b>Курс доллара</b>: покупка - ${bank[0].buy}, продажа - ${bank[0].sell} <br> <b>Курс евро</b>: покупка - ${bank[1].buy}, продажа - ${bank[1].sell} <br><hr><br>`);

function buyCurrency (wallet) {
    if (wallet.UAH > 0) {
        document.write(`На Вашем счету ${wallet.UAH} грн. На них Вы можете купить ${wallet.UAH / wallet.USD} долларов или ${wallet.UAH / wallet.EURO} евро.<br><br>`);
    }
    else {
        alert(`Ошибка! У вас на счету ${wallet.UAH} грн, поэтому Вы не можете купить валюту.`);
    }
}

buyCurrency(userWallet);

function sellCurrency (wallet) {
    const currency = prompt("Какую валюту Вы хотите продать ('USD' или 'Euro')?").toUpperCase();
    let valuta = -1;
    let amount = 0;
    if (currency == "USD") {
        valuta = 0;
    } else if (currency == "EURO" || "EU") {
        valuta = 1;
    }

    if (valuta == -1) {
        alert("Ошибка! Неверно указана валюта");
        return;
    } else {
        amount = parseFloat(prompt(`Сколько ${currency} Вы хотите продать?`))
    }

    if (amount <= 0) {
        alert("Ошибка! Указана неверная сумма для продажи");
        return;
    } else if (amount > wallet[currency]) {
        alert("Ошибка! У Вас недостаточно средств.");
        return;
    }

    document.write(`После продажи ${amount} ${bank[valuta].name} Вы получите ${amount * bank[valuta].sell} грн. <br><br><hr><hr><br>`);
}

sellCurrency(userWallet);



// 2)Створити функцію move яка повертає текст  на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. 
// moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)

const move = (route, distance) => { return `Юзер передвинулся на ${route} на ${distance}.` };

const moveUser = (direction, steps, cbfn) => {
    if (direction == "север" || "Север" || "СЕВЕР" || "юг" || "Юг" || "ЮГ" || "запад" || "Запад" || "ЗАПАД" || "восток" || "Восток" || "ВОСТОК") {

        if (steps === NaN || steps === undefined) {
        alert("Ошибка! Неверное значение!");
        return;
        } else if (steps == 1) steps = "1 шаг";
        else if (steps == 2 || steps == 3 || steps == 4) steps+= " шага";
        else steps+= " шагов";
        return cbfn(direction, steps);
        
    } else {
        alert("Ошибка! Неверное направление!");
        return;
    }
}

let drctn = prompt("Введите направление движения (север, юг, запад или восток)");
let stps = parseInt(prompt("На сколько шагов? (цифровое значение)"));
document.write(moveUser(drctn, stps, move));
document.write("<br><hr><hr><br>");


// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву

function deleter(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) continue; 
        else newArr.push(array[i]);
    }
    return newArr;
}

const arrayFn = (arr) => arr.length == 0 ? alert("Ошибка! Этот массив пуст") : deleter(arr);

document.write(arrayFn(["1 Keep", "2 Remove", "3 Keep", "4 Remove", "5 Keep", "6 Remove", "7 Keep", "8 Remove", "9 Keep", "10Remove", "11 Keep", "12 Remove", "13 Keep", "14 Remove", "15 Keep"]));
document.write("<br><hr><hr><br>");


//4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

let figurs = [
    {
        figure:"Square",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

const getArea = (arr) => arr.forEach(element => {
    document.write(`Площадь ${element.figure} = ${element.sizeA * element.sizeB} <br>`);
});

getArea(figurs);
document.write("<br><hr><hr><br>");


//5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4

const arr1 = [2,3,5,4,8,7,9,10];
let arr2 = arr1.map(element => (element % 2 == 0) ? element *= 4 : element);

document.write(arr1 + "<br>");
document.write(arr2);