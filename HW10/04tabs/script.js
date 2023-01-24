// Реалізуйте самостійно стилі і код для табів. Умова щоб таби можна було маштабувати збільшувати їх кількість

window.onload = () => {
  let [...tabs] = document.querySelectorAll(".tab");
  let [...divs] = document.querySelectorAll("section > div");
  const addTab = document.querySelector(".add-tab");

  for (let i = 0; i < tabs.length; i++) {
    let [...tabs] = document.querySelectorAll(".tab");
    let [...divs] = document.querySelectorAll("section > div");
    divs[i].innerHTML = `<p>Это вкладка <span>${tabs[i].innerText}</span>. Здесь будет какой-то текст. Для создания новой вкладки, нажмите на вкладку со знаком +.</p><p>Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Буквоград маленькая мир свою обеспечивает приставка снова от всех вскоре наш злых силуэт домах, языкового предупредила ты пустился, взгляд агентство выйти.</p>`;
    divs[i].className = tabs[i].innerText.toLowerCase();
  }

  function activateTab() {
    let [...tabs] = document.querySelectorAll(".tab");
    let [...divs] = document.querySelectorAll("section > div");
    this.classList.add("active");
    divs[tabs.indexOf(this)].style.display = "block";
    for (let k = 0; k < tabs.length; k++) {
      if (this != tabs[k]) {
        tabs[k].classList.remove("active");
        divs[k].style.display = "none";
      }
    }

  }

  for (let j = 0; j < tabs.length; j++) {
    tabs[j].addEventListener("click", activateTab)
  }

  addTab.addEventListener("click", function () {
    const newTab = document.createElement("li");
    newTab.className = "tab";
    newTab.addEventListener("click", activateTab);
    newTab.innerText = "New";
    addTab.before(newTab);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "<p>Это новая вкладка. Здесь будет какой-то текст.</p><p>Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Буквоград маленькая мир свою обеспечивает приставка снова от всех вскоре наш злых силуэт домах, языкового предупредила ты пустился, взгляд агентство выйти.</p>"
    document.querySelector("section").appendChild(newDiv);
  })
}