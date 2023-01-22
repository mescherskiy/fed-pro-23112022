// 1) Створити форму як на малюнку, за допомогою js реалізувати:
// - перевірку чи співпадають паролі; 
// - чи введені всі дані в полях;
// - Якщо всі данні введені, сховати поля  і кнопки і вивести текст, реєсстрація пройшла успішно;
// - в полях де помилка змінити колір бордера на червоний

window.onload = () => {
    const [...inputs] = login.elements;
    console.log(login);

    const username = inputs[0];
    const email = inputs[1];
    const phone = inputs[2];
    const password = inputs[3];
    const confirmPassword = inputs[4];

    login.onsubmit = (e) => {
        let isValid = true;

        for (let i = 0; i < 5; i++) {
            inputs[i].style.borderColor = "rgb(182, 142, 212)";
        }

        if (username.value.length < 2) {
            isValid = false;
            username.style.borderColor = "red";
        }

        if (!email.value.match(/^\S+@\S+\.\S+$/)) {
            isValid = false;
            email.style.borderColor = "red";
        }

        if (!phone.value.match(/^\+?\d{0,3}\s?\-?\(?\d{2,3}\)?\s?\-?\d{3}\s?\-?\d{2}\s?\-?\d{2}/)) {
            isValid = false;
            phone.style.borderColor = "red";
        }

        if (password.value.length < 8) {
            isValid = false;
            password.style.borderColor = "red";
        }

        if (password.value !== confirmPassword.value) {
            isValid = false;
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        }

        if (!isValid) {
            e.preventDefault();
            alert("Форма заполнена неверно!");
        } else {
            login.remove();
            document.querySelector("h1").remove();
            const h2 = document.createElement("h2");
            h2.innerText = "Registration completed!";
            document.querySelector("main").appendChild(h2);
        }
    }
}