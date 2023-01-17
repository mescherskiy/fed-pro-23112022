window.onload = () => {

    // 1) Створити массив шляхів до зображень і створити слайдер який переключає кожні 3 секунди картинку, слайдер повинен бути зациклений, коли доходить до кінця массиву починає показувати зображення з початку. Анімації і ефекти до слайдеру по бажанню

    // 2) Створити 2 кнопки які при кліку будуть перемикати зображення в слайдері, вперед назад

    let images = [
        'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111858/Player_Profile_Thumbnail_Mens_2223_Kit_DDG1658217243086_large.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/17/3/1114943/LM_Player_Profile_Thumbnail1658929466190.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111870/Player_Profile_Thumbnail_Mens_2223_Kit_Varane1658219562690_large.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111857/Player_Profile_Thumbnail_Mens_2223_Kit_Dalot1658217740039_thumb.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/17/3/1114946/CE_Player_Profile_Thumbnail1658929113165.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/17/89/1137010/C_Player_Profile_Thumbnail_copy1661414106219_large.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111866/Player_Profile_Thumbnail_Mens_2223_Kit_Rashford1658219368805_thumb.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111856/Player_Profile_Thumbnail_Mens_2223_Kit_bruno1658216905336.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/17/101/1139991/Antony_thumbnail_grid1662127295056.jpg',
        'https://assets.manutd.com/AssetPicker/images/0/0/17/227/1172436/Martial_PP_Thumbnail1670239308056.jpg'
    ]
    let activeImgIndex = 0;
    const sliderLine = document.querySelector(".slider-line");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    document.querySelector(".slide").src = images[0];

    function drawNext() {
        let img = document.createElement("img");
        img.src = images[activeImgIndex + 1 == images.length ? 0 : activeImgIndex + 1];
        img.classList.add("slide");
        img.style.left = "1000px";
        sliderLine.appendChild(img);
    }

    function drawPrev() {
        let img = document.createElement("img");
        img.src = images[activeImgIndex - 1 < 0 ? images.length - 1 : activeImgIndex - 1];
        img.classList.add("slide");
        img.style.left = "-1000px";
        sliderLine.insertBefore(img, sliderLine.firstElementChild);
    }

    function slideToNext() {
        drawNext();
        btnNext.onclick = null;
        let offset = 0;

        for (let i = 0; i < sliderLine.childElementCount; i++) {
            sliderLine.children[i].style.left = `${offset * 1000 - 1000}px`;
            offset++;
        }
        activeImgIndex = activeImgIndex + 1 == images.length ? 0 : activeImgIndex + 1;

        setTimeout(function () {
            sliderLine.removeChild(sliderLine.firstElementChild);
            btnNext.onclick = slideToNext;
        }, 1000);
    }

    function slideToPrev() {
        drawPrev();
        btnPrev.onclick = null;
        let offset = 0;

        for (let i = sliderLine.childElementCount - 1; i >= 0; i--) {
            sliderLine.children[i].style.left = `${offset * 1000 + 1000}px`;
            offset--;
        }
        activeImgIndex = activeImgIndex - 1 < 0 ? images.length - 1 : activeImgIndex - 1;

        setTimeout(function () {
            sliderLine.removeChild(sliderLine.lastElementChild);
            btnPrev.onclick = slideToPrev;
        }, 1000);
    }

    btnNext.onclick = slideToNext;
    btnPrev.onclick = slideToPrev;


    // 3) Зробити таймер який відраховує 60секунд і виводить розрахунок на сторінку, а потім відображає alert('Ви дочикались знижок) Стилізування за бажанням

    setInterval(slideToNext, 3000);

    let timeCounter = 60;
    const time = document.createElement("h1");
    time.innerText = timeCounter;
    time.style.cssText = "text-align: center";
    document.body.appendChild(time);

    const timerInterval = setInterval(() => {
        timeCounter--;
        time.innerText = timeCounter;
        if (timeCounter == 0) {
            clearInterval(timerInterval);
            setTimeout(() => alert("Вы дождались скидок!"), 1000);
        }
    }, 1000);


    // 4) Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна бути кнопка закрити вікно. Під модальним вікном повиний бути блок підкладка (на всю ширину сторінки) при кліку на який модальне вікно закривається. За допомгою js задайте left i top щоб вікно було по центру, для цього використайте window.innerWidth  і window.innerHeight а також визначте розміри блоку модального вікна

    const modalBtn = document.createElement("button");
    modalBtn.innerText = "Get modal!";
    modalBtn.style.display = "block";
    modalBtn.style.margin = "0 auto";
    document.body.appendChild(modalBtn);

    const backdrop = document.querySelector(".backdrop");
    backdrop.style.cssText += `width: 100%; height: 100%`;

    const modal = document.querySelector(".modal");
    const closeIcon = document.querySelector(".modal-header svg");
    const closeBtn = document.querySelector(".modal-footer button");
    closeIcon.addEventListener("mouseover", () => {closeIcon.style.cssText += "transform: rotate(180deg); transition: all 1s ease;"});
    closeIcon.addEventListener("mouseout", () => {closeIcon.style.cssText += "transform: rotate(-180deg); transition: all 1s ease;"});
    
    modalBtn.addEventListener("click", () => {
        backdrop.style.display = "flex";
        modal.style.display = "block";
    })

    const closeModal = () => {
        backdrop.style.display = "none";
    }

    closeIcon.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", function(e) {
        if (e.target == this) {closeModal()}
    });
}