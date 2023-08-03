$('.slider').slick({
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    },

    {
      breakpoint:280,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

$('.TrandNFT__inner1').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1, // Количество слайдов для показа
          slidesToScroll: 1 // Количество слайдов для прокрутки
        }
      },
     
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Количество слайдов для показа
          slidesToScroll: 1 // Количество слайдов для прокрутки
        }
      }
    ]
  });
 

      document.querySelector('.burger').addEventListener('click', function () {
      this.classList.toggle('active');
      document.querySelector('.menu__list').classList.toggle('open');
    }) 


