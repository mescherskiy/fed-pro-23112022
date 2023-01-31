//створити функцію яка отримує массив данних, колір. І виводить графік на канвасі

window.onload = () => {
    const canvas = document.querySelector("#canvas");
    canvas.width = 600;
    canvas.height = 350;
    canvas.setAttribute("style", "border: 1px solid black");
    const ctx = canvas.getContext("2d");

    function drawChart(arr = [], color) {
        const max = Math.max(...arr);
        ctx.fillStyle = color;
        const coef = (canvas.height - 10) / max;
        const barWidth = (canvas.width - ((arr.length + 1) * 10)) / arr.length;

        for (let i = 0; i < arr.length; i++) {
            let barHeight = arr[i] * coef;
            ctx.fillRect(barWidth * i + 10 * i + 10, canvas.height - barHeight, barWidth, barHeight)
        }
    }

    drawChart([132, 52, 36, 74, 5, 100, 18, 63, 90], "green");
}