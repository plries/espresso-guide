// mobile nav

$("#menu").click(function(){
  $("nav").toggleClass("toggleMenu");
});

// jQuery backgroundVideo
$(document).ready(function(){
  
  $(".my-background-video").bgVideo({

      pauseAfter: 0,
      fadeIn: true,
      showPausePlay: false

  });

});

// scrollReveal
const slideUp = {
  distance: "125%",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
  interval: 300,
};

const slideRight = {
  distance: "125%",
  origin: "left",
  opacity: 0,
  duration: 1000,
  delay: 350
};

const Reveal = {
  scale: 0.9,
  opacity: 0.3,
  duration: 400,
  interval: 300,
  reset: true,
  viewFactor: 1
}

ScrollReveal().reveal(".show", slideUp);
ScrollReveal().reveal("#cta", slideRight);

ScrollReveal().reveal(".showTool", Reveal);

// gsap

gsap.set(".beans", {xPercent:-50});

var rotate = gsap.timeline({
  scrollTrigger:{
    scrub: 0.5,
  }
})
.to(".beans", {
  rotation: 360,
  duration: 5,
  ease:'power1',
})

// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar'
  }
});