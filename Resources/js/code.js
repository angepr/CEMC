
// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // carrusel
  const carrusel = document.querySelector(".carrusel-items");
  let intervalo = null;
  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
  let step = 1;
  const start = () => {
    intervalo = setInterval(function () {
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if (carrusel.scrollLeft === maxScrollLeft) {
        step = step * -1;
      } else if (carrusel.scrollLeft === 0) {
        step = step * -1;
      }
    }, 10);
  };
  
  start();
  
  // numeritos
  
  $(".number").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.text() },
      {
        duration: 1000,
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
      }
    );
  });
  

