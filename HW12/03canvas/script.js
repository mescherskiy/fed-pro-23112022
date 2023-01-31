//- Створити функцію яка малює коло в канвасі і розміщує в середині кола текст 

window.onload = () => {
    function draw(val, text) {
        const canvas = document.querySelector("#canvas");
        canvas.style.margin = "10px";
        canvas.style.border = "1px solid red";
        
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 150, val/2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.font = "20px arial";
        ctx.strokeText(text, 160-val/2, 150, val-20);
        ctx.closePath();
    }

    draw(200, "Hello world! How are you doing tonight?");
}