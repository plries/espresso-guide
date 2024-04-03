// ----- Mobile Navigation -----

// if element with "#menu" ID is clicked...
$("#menu").click(function(){
  // add/remove class ".toggleMenu" to element
  // shows/hides mobile navigation menu
  $("nav").toggleClass("toggleMenu");
});

// ----- jQuery Background Video -----

// when document loads...
$(document).ready(function(){
  
  // apply these options to the element with ".my-background-video" class
  $(".my-background-video").bgVideo({

      // continually plays
      pauseAfter: 0,
      // fades video in
      fadeIn: true,
      // removes pause/play functionality
      showPausePlay: false

  });
});









