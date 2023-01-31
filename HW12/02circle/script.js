// створити інпут куди водиться значення і кнопку . Після введення значення ( цифрового ) і натискання на кнопку малються кола за допомогою svg. При натисканні на намальованне коло воно повино видалятись.

window.onload = () => {
    const input = document.querySelector("#val");
    const btn = document.querySelector("button");
    let isInputFilled = false;

    input.oninput = function () {
        input.value > 0 ? isInputFilled = true : isInputFilled = false;
    }

    btn.onclick = function () {
        if (isInputFilled) {
            const val = input.value;
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", val);
            svg.setAttribute("height", val);
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("stroke", "black");
            circle.setAttribute("fill", "purple");
            circle.setAttribute("cx", val/2);
            circle.setAttribute("cy", val/2);
            circle.setAttribute("r", val/2);
            circle.onclick = function() {document.body.removeChild(svg)};
            svg.appendChild(circle);
            document.body.appendChild(svg);
        }
    }
}