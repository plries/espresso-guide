// nav

const menu = document.getElementById("menu");

function toggleMenu() {
        
  menu.classList.toggle("toggleMenu");

};

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
  distance: '125%',
  origin: 'bottom',
  opacity: 0,
  duration: 1000,
  interval: 300
};

const slideRight = {
  distance: '125%',
  origin: 'left',
  opacity: 0,
  duration: 1000,
  delay: 350
};

ScrollReveal().reveal('.show', slideUp);

ScrollReveal().reveal('#cta', slideRight);

