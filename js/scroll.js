// ----- Scroll Reveal -----

// creates a variable called slideUp
// assigns following options
const slideUp = {
    // sets element's distance from original position to 125% when revealed
    distance: "125%",
    // sets where element to originate from the bottom when revealed
    origin: "bottom",
    // sets opacity to 0 prior to being revealed
    opacity: 0,
    // sets animation duration to 1000ms
    duration: 1000,
    // sets time between each animation reveal to 1500ms
    interval: 1500,
  };
  
  // when an element with class ".show" enters the viewport, apply the slideUp animation
  ScrollReveal().reveal(".show", slideUp);
   // when an element with ID "#cta" enters the viewport, apply the slideRight animation