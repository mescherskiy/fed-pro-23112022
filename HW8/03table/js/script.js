// 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js.  В таблиці повино бути мінімум 2 рядки

window.onload = () => {
    const table = document.createElement("table");
    table.createTHead();
    table.tHead.insertRow();
    table.tHead.rows[0].appendChild(document.createElement("th"));
    table.tHead.rows[0].appendChild(document.createElement("th"));
    table.tHead.rows[0].appendChild(document.createElement("th"));
    const [...th] = table.tHead.rows[0].cells;
    th[0].innerText = "Name";
    th[1].innerText = "City";
    th[2].innerText = "Course";
    
    table.createTBody();
    table.tBodies[0].insertRow();
    table.tBodies[0].rows[0].appendChild(document.createElement("td"));
    table.tBodies[0].rows[0].appendChild(document.createElement("td"));
    table.tBodies[0].rows[0].appendChild(document.createElement("td"));
    table.tBodies[0].rows[0].cells[0].innerText = "Alexandr";
    table.tBodies[0].rows[0].cells[1].innerText = "Kyiv";
    table.tBodies[0].rows[0].cells[2].innerText = "FullStack";
    table.tBodies[0].insertRow();
    table.tBodies[0].rows[1].appendChild(document.createElement("td"));
    table.tBodies[0].rows[1].appendChild(document.createElement("td"));
    table.tBodies[0].rows[1].appendChild(document.createElement("td"));
    table.tBodies[0].rows[1].cells[0].innerText = "Vladyslav";
    table.tBodies[0].rows[1].cells[1].innerText = "Kyiv";
    table.tBodies[0].rows[1].cells[2].innerText = "Java";
    table.tBodies[0].insertRow();
    table.tBodies[0].rows[2].appendChild(document.createElement("td"));
    table.tBodies[0].rows[2].appendChild(document.createElement("td"));
    table.tBodies[0].rows[2].appendChild(document.createElement("td"));
    table.tBodies[0].rows[2].cells[0].innerText = "Anatoliy";
    table.tBodies[0].rows[2].cells[1].innerText = "Poltava";
    table.tBodies[0].rows[2].cells[2].innerText = "Java";
    document.querySelector("body").appendChild(table);
}