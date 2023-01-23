// Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули.

window.onload = () => {
    const div = document.querySelector("div");
    document.body.addEventListener("keydown", move);

    function move(e) {
        e.preventDefault();
        let offsetLeft = div.offsetLeft;
        let offsetTop = div.offsetTop;

        if (e.keyCode == 37) { 
          offsetLeft-= 10;
        }
        if (e.keyCode == 38) { 
          offsetTop-= 10;
        }
        if (e.keyCode == 39) { 
            offsetLeft+= 10;
        }
        if (e.keyCode == 40) {
          offsetTop+= 10;
        }
        div.style.left = offsetLeft + 'px';
        div.style.top = offsetTop + 'px';
      }
}