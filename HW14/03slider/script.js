// 3) Підключити до сторінки jQuery, і бібліотеку slick створити на сторінці слайдер на 5 зображень, пр зменшені екрану до 1200px  повино ставати 3 картинки

$(document).on('ready', function () {
    $(".regular").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
          ]
    });
  });