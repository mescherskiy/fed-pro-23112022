window.onload = () => {
    // 1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
    // CountLowrercase("abc"); ===> 0
    // CountLowrercase("abcABC123"); ===> 3
    // CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

    const countBigLetters = (str) => {
        const pattern = /[A-Z]/g;
        return str.match(pattern) ? str.match(pattern).length : 0;
    }

    console.log(`countBigLetters("abc") ===> ${countBigLetters("abc")}`)
    console.log(`countBigLetters("abcABC123") ===> ${countBigLetters("abcABC123")}`);
    console.log(`countBigLetters("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") ===> ${countBigLetters("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")}`);



    // 2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його
    // fclearString("hell5o wor6ld") ======> 56

    const clearString = (str) => {
        return parseInt (str.replace(/\D/g, ""));
    }

    console.log(`clearString("hell5o wor6ld") ===> ${clearString("hell5o wor6ld")}`);



    // 3) Створити інпут який отримує пін код(це 4 цифрових значення).За допомогою регулярки перевітити чи валідний пін код ввів користувач
    // "1234"   -- > true
    // "12345"  -- > false
    // "a234"   -- > false

    const input = document.querySelector("input");
    const form = document.querySelector("form");
    const errorP = document.querySelector("p");

    form.addEventListener ("submit", function(e) {
        if (input.value.trim().match(/^\d{4}$/)) {
            errorP.style.display = "none";
        } else {
            e.preventDefault();
            errorP.style.display = "block";
        }
    }) 



    // 4) Створити регулярку яка отримує адресс сторінки і повертає тільки адресс
    // "https://prog.academy/?page=1" -- > "https://prog.academy/"

    const linkCutter = (link) => {
        return link.match(/^https?:\/{2}[a-z0-9.-]+\//);
    }

    console.log(`https://prog.academy/?page=1 ===> ${linkCutter("https://prog.academy/?page=1")}`)



    // 5) Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів.Приклад: validateUsr('a') => false,
    //     validateUsr('p1pp1') => true, validateUsr('asd43_34') => true

    const validateUser = (userName) => {
        return /[a-z0-9-_]{4,10}/i.test(userName);
    }

    console.log(`validateUser("a") ===> ${validateUser("a")}`);
    console.log(`validateUser("p1pp1") ===> ${validateUser("p1pp1")}`);
    console.log(`validateUser("asd43_34") ===> ${validateUser("asd43_34")}`);
}