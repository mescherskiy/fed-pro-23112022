// Створити запит до сервісу :
// https://jsonplaceholder.typicode.com/users
// за допомогою htmlHttprequest,
// 1) отриманні данні вивести на сторінку в вигляді стилізованих карток, в картці повина бути кнопка "select"
// 2)При кліку на кнопку "select" вибрані іd користувачів повині записувати в  localStorage,  також повинно бути записано в localStorage скільки користувачів вибрано.

// Додадткове завдання:
// Створити інпут в якому можна буде шукати користувачів по імені. ( всі користувачі в яких не співпадає імя повині зникати )


window.onload = () => {
    let users = [];

    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            users = xhr.response;
        }
    }

    let count = 0;

    const createUsers = () => {
        for (let user of users) {
            const card = document.createElement("div");
            card.className = "card";
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title text-center";
            cardTitle.innerText = user.name;

            const userInfo = document.createElement("ul");
            userInfo.className = "list-group";
            const userName = document.createElement("li");
            userName.className = "list-group-item";
            userName.innerHTML = `<span>Username: </span> ${user.username}`;
            const email = document.createElement("li");
            email.className = "list-group-item";
            email.innerHTML = `<span>E-mail: </span> ${user.email}`;
            const address = document.createElement("li");
            address.className = "list-group-item";
            address.innerHTML = `<span>Address: </span> ${user.address.city}, ${user.address.street}, ${user.address.suite}`;
            const phone = document.createElement("li");
            phone.className = "list-group-item";
            phone.innerHTML = `<span>Phone: </span> ${user.phone}`;
            const webSite = document.createElement("li");
            webSite.className = "list-group-item";
            webSite.innerHTML = `<span>Website: </span> <a href=${user.website}>${user.website}</a>`;
            const company = document.createElement("li");
            company.className = "list-group-item";
            company.innerHTML = `<span>Company: </span>${user.company.name}`;
            const select = document.createElement("button");
            select.className = `btn btn-outline-primary w-100 user-id-${user.id}`;
            select.innerText = "Select";
            select.onclick = function () {
                if (!localStorage[`${user.username} SELECTED`]) {
                    localStorage.setItem("Users selected", ++count);
                    localStorage.setItem(`${user.username} SELECTED`, user.id);
                }
            }
            userInfo.appendChild(userName);
            userInfo.appendChild(email);
            userInfo.appendChild(address);
            userInfo.appendChild(phone);
            userInfo.appendChild(webSite);
            userInfo.appendChild(company);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(userInfo);
            cardBody.appendChild(select);
            card.appendChild(cardBody);
            document.body.appendChild(card);
        }

        const names = document.querySelectorAll("h5");
        const input = document.querySelector("input");
        input.oninput = function () {
            for (let name of names) {
                if (!name.innerText.includes(input.value)) {
                    name.parentElement.parentElement.style.display = "none";
                } else {
                    name.parentElement.parentElement.style.display = "block";
                }
            }
        }
    }

    xhr.onload = createUsers;
}