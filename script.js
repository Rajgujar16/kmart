var swiper = new Swiper(".mySwiper", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto', // Change to 'auto' for responsive behavior
    spaceBetween: 20, // Adjust space between slides as needed
    pagination: {
      el: '.swiper-pagination',
      type: 'none',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // When window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // When window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      // When window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 5,
      }
      // Add more breakpoints as needed
    }
  });