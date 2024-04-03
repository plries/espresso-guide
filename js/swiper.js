// ----- Swiper -----

// creates a variable called swiper
// assigns element with class ".swiper" to variable
// applies following options to variable
const swiper = new Swiper(".swiper", {
    // sets the direction which slides move on the x axis
    direction: "horizontal",
    // allows the last slide to loop back to the first slide on swipe
    loop: true,
  
    // applies the pagination functionality to the element with the class ".swiper-pagination"
    pagination: {
      el: ".swiper-pagination",
    },
  
    // applies the navigation functionality to the following elements
    navigation: {
      // sets the nextEl functionality to the element with the class ".swiper-button-next"
      nextEl: ".swiper-button-next",
      // sets the prevEl functionality to the element with the class ".swiper-button-prev"
      prevEl: ".swiper-button-prev",
    },
  });