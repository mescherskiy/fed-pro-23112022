// 5) додаткове завдання зробити фільтр який вибирає яка планета найчастіше зявлялась в фільмах підказка: чим більше довжина 

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
                    <li class="films"><span class="font-bold">Films: </span>${item.films.length}`;
                card.appendChild(list);
                cards.appendChild(card);
            })
        })
    }

    createCards();

    const btnPopularity = document.querySelector(".btn-popularity");

    let ascPopularity = false;

    btnPopularity.onclick = function () {
        const [...planets] = cards.children;
        planets.sort((a, b) => ascPopularity ?
            a.querySelector(".films").innerText.match(/\d+/) - b.querySelector(".films").innerText.match(/\d+/) :
            b.querySelector(".films").innerText.match(/\d+/) - a.querySelector(".films").innerText.match(/\d+/));
            ascPopularity = !ascPopularity;
        cards.innerHTML = '';
        planets.forEach((planet) => cards.appendChild(planet));
    }

}