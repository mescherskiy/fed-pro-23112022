// 1)Вивести список планет в вигляді карток, і зробити кнопки для фільтрування планет за розміром (при кліку на кнопку планети повині вивестись від більшого розміру до меншого і при кліку знову від меншого до більшого) Зробити такий самий фільтр по population
// Використати https://swapi.dev/api/planets

window.onload = () => {
    async function getPlanets() {
        const planets = await fetch("https://swapi.dev/api/planets");
        return await planets.json();
    }

    const cards = document.querySelector(".cards");

    const createCards = () => {
        const _imageUrl = "https://starwars-visualguide.com/assets/img/"
        const imgPlaceholder = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
        getPlanets().then(data => {
            data.results.map((item, index) => {
                const card = document.createElement("div");
                card.set
                card.className = "card overflow-hidden m-2 shadow-md bg-white w-[270px] rounded-lg";
                card.setAttribute("key", index * 3 + 'v');
                const image = document.createElement("img");
                const imgSrc = `${_imageUrl}planets/${item.url.match(/\d+/)}.jpg`;
                fetch(imgSrc).then(response => {
                    if (response.ok) {
                        image.setAttribute("src", imgSrc)
                    } else {
                        image.setAttribute("src", imgPlaceholder);
                        image.style.height = "270px";
                    }
                })
                card.appendChild(image);
                const list = document.createElement("ul");
                list.className = "m-3";
                list.innerHTML = `
                    <li class="text-xl text-center pb-2 name">${item.name}</li>
                    <li class="diameter"><span class="font-bold">Diameter: </span>${item.diameter}</li>
                    <li class="population"><span class="font-bold">Population: </span>${item.population}</li>`;
                card.appendChild(list);
                cards.appendChild(card);
            })
        })
    }

    createCards();

    const btnDiameter = document.querySelector(".btn-diameter");
    const btnPopulation = document.querySelector(".btn-population");

    let ascDiameter = false;
    let ascPopulation = false;

    btnDiameter.onclick = function () {
        const [...planets] = cards.children;
        planets.sort((a, b) => ascDiameter ?
            a.querySelector(".diameter").innerText.match(/\d+/) - b.querySelector(".diameter").innerText.match(/\d+/) :
            b.querySelector(".diameter").innerText.match(/\d+/) - a.querySelector(".diameter").innerText.match(/\d+/));
            ascDiameter = !ascDiameter;
        cards.innerHTML = '';
        planets.forEach((planet) => cards.appendChild(planet));
    }

    btnPopulation.onclick = function () {
        const [...planets] = cards.children;
        planets.sort((a, b) => ascPopulation ?
            a.querySelector(".population").innerText.match(/\d+/) - b.querySelector(".population").innerText.match(/\d+/) :
            b.querySelector(".population").innerText.match(/\d+/) - a.querySelector(".population").innerText.match(/\d+/));
            ascPopulation = !ascPopulation;
        cards.innerHTML = '';
        planets.forEach((planet) => cards.appendChild(planet));
    }

}