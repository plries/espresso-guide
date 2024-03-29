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