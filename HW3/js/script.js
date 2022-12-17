let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

document.write(`Массив по умолчанию: ${arrRandomNumbers} <br><br>`);

// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.

function getArray(arr) {
    let arrEvenNumbers = new Array();
    arr.forEach(element => {
        if (element % 2 == 0) {
            arrEvenNumbers.push(element);
        }
    });
    return arrEvenNumbers;
}

document.write(`1) Массив с четными числами: ${getArray(arrRandomNumbers)} <br><br>`);


// 2) Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив.

let goods = new Array();
for (let i = 0; i < 5; i++) {
    goods.push(prompt("Что купить?"));
}

document.write(`2) Ваш список покупок: ${goods} <br><br>`);


// 3) Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел. ( при розрахунках вважайте що массив може бути будьякої довжини переданий)

function getAverage (arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    let averageValue = sum / arr.length;
    return averageValue;
}

document.write(`3) Среднее значение всех чисел массива = ${getAverage(arrRandomNumbers)} <br><br>`);


// 4) Створити функцію яка замінює в массиві =) на ;)
let smile = [':)', '=)',':)', '=)',':)', '=)'];
function replaceSmile (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '=)') {
            arr[i] = ';)'
        }
    }
    return arr.join(" ");
}
document.write(`4) Массив с заменой смайликов - ${replaceSmile(smile)} <br><br>`);



// 5) створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals

let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
function newFunc (arg) {
    let newArray = new Array();
    if (arg == "last") {
        newArray = animals.splice(animals.length - 1, 1);
    } else if (arg == "first") {
        newArray = animals.splice(0, 1);
    } else {alert("Wrong argument!")}
    return newArray;
}

document.write(`5) Animals до выполнения функции: ${animals}; <br>
Новый массив: ${newFunc(prompt("Enter 'first' or 'last'"))} <br>
Animals после выполнения функции: ${animals}; <br><br>`)


// 6) Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву

function getSum (arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum;
}

document.write(`6) Сумма элементов массива по умолчанию = ${getSum(arrRandomNumbers)}<br><br>`);


// 7)Створити функцію яка отримує в аргумент старт значення і фініш значення ( старт менше фініша) також отрмує массив задовільної довжини. Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш

function spliceArray (start = 0, finish = 0, arr) {
    if (start < finish && start >=0 && finish <= arr.length) {
       return arr.splice(start, finish - start + 1); 
    } else if (start >= finish) {
        return alert("Error! 'Start' must be smaller than 'finish'!");
    }
    else {return alert("Wrong arguments!")};
}

document.write(`7) Массив по умолчанию до выполнения функции: ${arrRandomNumbers} <br>`);
document.write(`Вырезанный массив: ${spliceArray(parseInt(prompt("С какого индекса вырезать (не меньше 0)?")), parseInt(prompt(`По какой индекс (не больше ${arrRandomNumbers.length}) ?`)), arrRandomNumbers)}<br>`);
document.write(`Массив по умолчанию после выполнения функции: ${arrRandomNumbers}`);