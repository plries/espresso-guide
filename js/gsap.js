// ----- GSAP Scroll Trigger -----

// registers the Scroll Trigger plugin
gsap.registerPlugin(ScrollTrigger);

// sets elements with ".beans" class to transform: translateX(50%) 
gsap.set(".beans", {xPercent:-50});

// creates a timeline called rotate
var rotate = gsap.timeline({
  // when scrolling, scrub through the animation 
  // allows for animation to play forward when scrolled down, or play backward when scrolled up
  scrollTrigger:{
    scrub: true,
  }
})
// sets end point of animation for elements with ".beans" class
.to(".beans", {
  // sets end state of animation to a 720deg rotation
  // allows for the elements to spin depending on scroll/scrub position
  rotation: 720
}) 