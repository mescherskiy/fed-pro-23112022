// Створити форму яка отримує 2 значення ширину і висоту. Також є чекбокс еліпс. Якщо всі данні введено і чекбокс чекнутий, розблоковується кнопка малювати і малюється еліпс, якщо чекбокс ненажатий то кнопка також розблоковується і малюється прямокутник за заданими розмірами

window.onload = () => {
    const form = document.querySelector("form");
    const widthInput = document.querySelector("#width");
    const heightInput = document.querySelector("#height");
    const checkbox = document.querySelector("#ellipse");
    const drawBtn = document.querySelector("button");

    let isWidthFilled = false;
    let isHeightFilled = false;
    let isEllipseCheched = false;

    form.oninput = checkValues;
    form.addEventListener("submit", function(e) {e.preventDefault()});
    checkbox.onchange = function() {isEllipseCheched = checkbox.checked};
    
    widthInput.addEventListener("input", function(e) {e.target.value > 0 ? isWidthFilled = true : isWidthFilled = false});
    heightInput.addEventListener("input", function(e) {e.target.value > 0 ? isHeightFilled = true : isHeightFilled = false});

    function checkValues() {
        isWidthFilled && isHeightFilled ? drawBtn.removeAttribute("disabled") : drawBtn.setAttribute("disabled", "disabled");
    }

    function draw() {
        if (document.querySelector("svg")) {
            document.body.removeChild(document.querySelector("svg"));
        }
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const width = widthInput.value;
        const height = heightInput.value;
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
        let shape;
        if(isEllipseCheched) {
            shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            shape.setAttribute("cx", width/2);
            shape.setAttribute("cy", height/2);
            shape.setAttribute("rx", width/2);
            shape.setAttribute("ry", height/2);
        } else {
            shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            shape.setAttribute("x", 0);
            shape.setAttribute("y",0);
            shape.setAttribute("width", width);
            shape.setAttribute("height", height);
        }
        shape.setAttribute("stroke", "red");
        shape.setAttribute("fill", "black");
        svg.appendChild(shape);
        document.body.appendChild(svg);
    }

    drawBtn.onclick = draw;
}