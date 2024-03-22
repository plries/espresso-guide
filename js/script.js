$(document).ready(function(){
  
  $(".my-background-video").bgVideo({

      pauseAfter: 0,
      fadeIn: true,
      showPausePlay: false

  });

});

const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const ans = document.querySelector("#ans");
const callout = document.querySelector(".quote");
const intro = document.querySelector("#para");

window.addEventListener("scroll", show);

function show(){
    let box1 = q1.getBoundingClientRect();
    let box2 = q2.getBoundingClientRect();
    let box3 = ans.getBoundingClientRect()
    let box4 = callout.getBoundingClientRect();
    let box5 = intro.getBoundingClientRect();
    let windowH = window.innerHeight;

    if(box1.top < windowH/1.25) {
        q1.style.opacity = "1";
        q1.style.transform = "translateY(0vw)";
    }

    if(box2.top < windowH/1.25) {
      q2.style.opacity = "1";
      q2.style.transform = "translateY(0vw)";
    }
    
    if(box3.top < windowH/1.25) {
      ans.style.opacity = "1";
      ans.style.transform = "translateY(0vw)";
    }
    
    if(box4.top < windowH/1.5) {
      callout.style.opacity = "1";
      callout.style.transform = "translateY(0vw)";
    }

    if(box5.top < windowH/1.25) {
      intro.style.opacity = "1";
      intro.style.transform = "translateY(0vw)";
    }
}
