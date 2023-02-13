// 2) Створити сторінку, яка отримує список порід. Список порід вивести в вигляді списку. При кліку на породу собаки, зробити запит і вивести фото поруч з назвою породи.
//         Використати АПІ
//         https://dog.ceo/dog-api/documentation/

window.onload = () => {
    const list = document.querySelector("div.list-group");
    const img = document.querySelector("section img");

    async function getAllDogs() {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const responseJson = await response.json();
        return responseJson.message;
    }

    getAllDogs().then(dogs => {
        function addDog(breed, subBreed = "") {
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.className = "btn-check";
            input.setAttribute("name", "vbtn-radio");
            input.setAttribute("id", breed + subBreed);
            input.setAttribute("autocomplete", "off");

            input.onchange = function (e) {
                if (e.target.checked) {
                    const endpoint = subBreed === "" ? breed : `${breed}/${subBreed}`;
                    fetch(`https://dog.ceo/api/breed/${endpoint}/images/random`).then(
                        resp => resp.json()
                    ).then(response => {
                        img.setAttribute("src", response.message);
                        img.setAttribute("alt", endpoint)
                    })
                }
            }

            list.appendChild(input);

            const label = document.createElement("label");
            label.className = "btn btn-outline-primary rounded-0 border-secondary list-group-item-action";
            label.style.borderTopWidth = "0";
            label.style.borderBottomWidth = "1px";
            label.style.borderInlineWidth = "0";
            label.htmlFor = breed + subBreed;
            label.innerText = subBreed === "" ?
                `${breed.charAt(0).toUpperCase()}${breed.slice(1)}` :
                `${breed.charAt(0).toUpperCase()}${breed.slice(1)} ${subBreed.charAt(0).toUpperCase()}${subBreed.slice(1)}`;
            list.appendChild(label);
        }

        for (const breed in dogs) {
            if (dogs[breed].length === 0) {
                addDog(breed)
            } else if (dogs[breed].length > 0) {
                for (const subBreed of dogs[breed]) {
                    addDog(breed, subBreed);
                }
            }
        }
    })
}