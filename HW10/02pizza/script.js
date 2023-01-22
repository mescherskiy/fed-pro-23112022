window.onload = () => {
    const smallSizePrices = {
        curry: 295,
        sweet: 280,
        chili: 275,
        manhatten: 231,
        papperoni: 231,
        texas: 231,
        margarita: 266,
        toskana: 301,
        country: 286
    }

    const createCard = (pizzaName = "", pizzaNameEng = "", ingredients = [], imgSrc = "", price) => {
        const newCard = document.createElement("div");
        newCard.classList.add("card", pizzaNameEng);

        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "card-img-top";
        img.alt = pizzaName;
        newCard.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        newCard.appendChild(cardBody);

        const title = document.createElement("div");
        title.className = "title";
        cardBody.appendChild(title);

        title.appendChild(document.createElement("h5"));
        title.firstElementChild.className = "card-title";
        title.firstElementChild.innerText = pizzaName;

        title.appendChild(document.createElement("p"));
        title.lastElementChild.className = "ingredients";
        title.lastElementChild.innerText = ingredients.join(", ").toString();

        const sizeAndToppings = document.createElement("div");
        sizeAndToppings.className = "size-and-toppings";

        const sel = document.createElement("select");
        sel.className = "form-select size";
        const small = document.createElement("option");
        small.value = "small";
        small.selected;
        small.innerText = "Маленькая";
        sel.appendChild(small);
        const medium = document.createElement("option");
        medium.value = "medium";
        medium.innerText = "Средняя";
        sel.appendChild(medium);
        const big = document.createElement("option");
        big.value = "big";
        big.innerText = "Большая";
        sel.appendChild(big);
        const xxl = document.createElement("option");
        xxl.value = "xxl";
        xxl.innerText = "XXL";
        sel.appendChild(xxl);
        sizeAndToppings.appendChild(sel);

        const topping1 = document.createElement("div");
        topping1.className = "form-check";
        const checkbox1 = document.createElement("div");
        checkbox1.className = "checkbox";
        const input1 = document.createElement("input");
        input1.className = "form-check-input";
        input1.type = "checkbox";
        input1.value = "cheese";
        input1.id = `cheese-${pizzaNameEng}`;
        checkbox1.appendChild(input1);
        const label1 = document.createElement("label");
        label1.className = "form-check-label";
        label1.setAttribute("for", input1.id);
        label1.innerText = "Дополнительный сыр";
        checkbox1.appendChild(label1);
        topping1.appendChild(checkbox1);
        topping1.innerHTML += "<span>+39 грн</span>";
        sizeAndToppings.appendChild(topping1);

        const topping2 = document.createElement("div");
        topping2.className = "form-check";
        const checkbox2 = document.createElement("div");
        checkbox2.className = "checkbox";
        const input2 = document.createElement("input");
        input2.className = "form-check-input";
        input2.type = "checkbox";
        input2.value = "sausages";
        input2.id = `sausages-${pizzaNameEng}`;
        checkbox2.appendChild(input2);
        const label2 = document.createElement("label");
        label2.className = "form-check-label";
        label2.setAttribute("for", input2.id);
        label2.innerText = "Охотничьи колбаски";
        checkbox2.appendChild(label2);
        topping2.appendChild(checkbox2);
        topping2.innerHTML += "<span>+59 грн</span>";
        sizeAndToppings.appendChild(topping2);

        const topping3 = document.createElement("div");
        topping3.className = "form-check";
        const checkbox3 = document.createElement("div");
        checkbox3.className = "checkbox";
        const input3 = document.createElement("input");
        input3.className = "form-check-input";
        input3.type = "checkbox";
        input3.value = "sauce";
        input3.id = `sauce-${pizzaNameEng}`;
        checkbox3.appendChild(input3);
        const label3 = document.createElement("label");
        label3.className = "form-check-label";
        label3.setAttribute("for", input3.id);
        label3.innerText = "Соус барбекю";
        checkbox3.appendChild(label3);
        topping3.appendChild(checkbox3);
        topping3.innerHTML += "<span>+29 грн</span>";
        sizeAndToppings.appendChild(topping3);

        cardBody.appendChild(sizeAndToppings);

        const footer = document.createElement("div");
        footer.className = "footer";
        const priceLine = document.createElement("p");
        priceLine.className = "price-line";
        priceLine.innerHTML = `<span class="price">${price}</span> грн`;
        footer.appendChild(priceLine);
        const btn = document.createElement("a");
        btn.className = "btn btn-primary buy";
        btn.innerText = "Купить";
        footer.appendChild(btn);

        cardBody.appendChild(footer);

        document.querySelector("section").appendChild(newCard);
    }

    createCard(
        "Пицца Карри",
        "curry",
        ["Соус карри", "курица", "лук", "ананас", "моцарелла"],
        "./img/curry.jpg",
        smallSizePrices.curry
    );

    createCard(
        "Пицца Кисло-сладкая",
        "sweet",
        ["Соус кисло-сладкий", "фета", "фрикадельки", "болгарский перец", "грибы", "моцарелла"],
        "./img/sweet-n-sour.jpg",
        smallSizePrices.sweet
    );

    createCard(
        "Пицца Чили",
        "chili",
        ["Соус чили", "халапеньо", "болгарский перец", "моцарелла", "папперони", "помидоры"],
        "./img/chili.jpg",
        smallSizePrices.chili
    );

    createCard(
        "Пицца Манхеттен",
        "manhatten",
        ["Грибы (двойная порция)", "моцарелла", "папперони", "соус альфредо"],
        "./img/manhatten.jpg",
        smallSizePrices.manhatten
    );

    createCard(
        "Пицца Папперони с томатами",
        "papperoni",
        ["Моцарелла", "папперони", "помидоры", "соус барбекю"],
        "./img/papperoni.jpg",
        smallSizePrices.papperoni
    );

    createCard(
        "Пицца Техас",
        "texas",
        ["Кукуруза", "лук", "грибы", "колбаски баварские", "моцарелла", "соус барбекю"],
        "./img/texas.jpg",
        smallSizePrices.texas
    );

    createCard(
        "Пицца Маргарита",
        "margarita",
        ["Моцарелла (двойная порция)", "соус Alexandr's"],
        "./img/margarita.jpg",
        smallSizePrices.margarita
    );

    createCard(
        "Пицца Тоскана",
        "toskana",
        ["Курица", "фета", "моцарелла", "помидоры черри", "соус альфредо", "шпинат"],
        "./img/toskana.jpg",
        smallSizePrices.toskana
    );

    createCard(
        "Пицца Кантри",
        "margarita",
        ["Лук", "бекон", "ветчина", "грибы", "моцарелла", "огурцы маринованные", "соус чесночный"],
        "./img/country.jpg",
        smallSizePrices.country
    );

    const [...cards] = document.querySelectorAll(".card");
    const [...buyBtn] = document.querySelectorAll(".buy");
    const aside = document.querySelector("aside");
    const totalPrice = document.querySelector(".total-price");

    for (let k = 0; k < cards.length; k++) {
        cards[k].onchange = refreshPrice;
    }

    function refreshPrice(e) {
        const pizza = e.currentTarget.classList[1];
        const price = e.currentTarget.querySelector(".price");
        let plusSize = 0;
        let plusToppings = 0;

        const size = e.currentTarget.querySelector("select").value;
        if (size == "medium") {
            plusSize = 43;
        } else if (size == "big") {
            plusSize = 76;
        } else if (size == "xxl") {
            plusSize = 135;
        }

        const [...checkboxes] = e.currentTarget.querySelectorAll("input");
        checkboxes[0].checked ? plusToppings += 39 : plusToppings;
        checkboxes[1].checked ? plusToppings += 59 : plusToppings;
        checkboxes[2].checked ? plusToppings += 29 : plusToppings;

        price.innerText = smallSizePrices[pizza] + plusSize + plusToppings;
    }

    for (btn of buyBtn) {
        btn.onclick = prepareOrder;
    }

    function prepareOrder(e) {
        if (aside.style.display == "" || null || "none") {
            aside.style.display = "block";
        }
        const pizza = e.target.parentNode.parentNode.parentNode;

        const order = {
            pizzaName: pizza.querySelector(".card-title").innerText,
            size: pizza.querySelector(".size").options[pizza.querySelector(".size").selectedIndex].text,
            price: parseInt(pizza.querySelector(".price").innerText),
            get toppings() {
                let checked = [];
                const checkboxes = pizza.querySelectorAll("input");
                for (item of checkboxes) {
                    if (item.checked) {
                        checked.push(item.nextElementSibling);
                    }
                }
                return checked;
            }
        }

        console.log(order);

        const orderList = document.querySelector(".order-list");

        const li = document.createElement("li");
        const orderedPizza = document.createElement("p");
        orderedPizza.className = "ordered-pizza";
        orderedPizza.innerText = order.pizzaName;
        li.appendChild(orderedPizza);
        const orderedSize = document.createElement("p");
        orderedSize.className = "ordered-size";
        orderedSize.innerHTML = `Размер: <span>${order.size}</span>`;
        li.appendChild(orderedSize);
        if (order.toppings.length != 0) {
            for (topping of order.toppings) {
                let item = document.createElement("p");
                item.className = "ordered-topping";
                item.innerText = `+ ${topping.innerText}`;
                li.appendChild(item);
            }
        }

        orderList.appendChild(li);
        // const pickup = document.createElement("div");
        // pickup.className = "form-check";
        // const pickupInput = document.createElement("input");
        // pickupInput.className = "form-check-input";
        // pickupInput.type = "radio";
        // pickupInput.name = "flexRadioDefault";
        // pickupInput.id = "pickup";
        // pickupInput.checked = true;
        // pickup.appendChild(pickupInput);
        // const pickupLabel = document.createElement("label");
        // pickupLabel.className = "form-check-label";
        // pickupLabel.setAttribute("for", "pickup");
        // pickupLabel.innerText = "Самовывоз";
        // pickup.appendChild(pickupLabel);
        // aside.appendChild(pickup);

        // const delivery = document.createElement("div");
        // delivery.className = "form-check";
        // const deliveryInput = document.createElement("input");
        // deliveryInput.className = "form-check-input";
        // deliveryInput.type = "radio";
        // deliveryInput.name = "flexRadioDefault";
        // deliveryInput.id = "delivery";
        // delivery.appendChild(deliveryInput);
        // const deliveryLabel = document.createElement("label");
        // deliveryLabel.className = "form-check-label";
        // deliveryLabel.setAttribute("for", "delivery");
        // deliveryLabel.innerText = "Доставка (+40 грн)";
        // delivery.appendChild(deliveryLabel);
        // aside.appendChild(delivery);

        // const totalPrice = document.createElement("h3");



        // totalPrice.className = "total-price";
        // totalPrice.innerText = `Сумма: ${order.price}`;
        // aside.appendChild(totalPrice);

        totalPriceArr.push(order.price);
        totalPrice.innerText = getTotalPrice() + deliveryPrice;
    }

    document.querySelector(".delivery-and-total-price").onchange = refreshTotalPrice;

    //aside.onchange = refreshTotalPrice;
    let deliveryPrice = 0;

    function refreshTotalPrice(event) {
        const radio = event.currentTarget.querySelectorAll("input")[1];

        radio.checked ? deliveryPrice = 40 : deliveryPrice = 0;

        totalPrice.innerText = getTotalPrice() + deliveryPrice;
    }

    let totalPriceArr = [];
    const getTotalPrice = () => {
        let sum = 0;
        if (totalPriceArr.length > 0) {
            for (price of totalPriceArr) {
                sum += price;
            }
            return sum;
        } else { return order.price }
    }
}