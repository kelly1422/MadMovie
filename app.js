gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });

// const tl=gsap.timeline({
//     scrollTrigger:{
//     trigger: "#container",
//     start: "top top",
//     end:"+=600",
//     scrub:true    }
// });
gsap.to(".film", {
    scrollTrigger: ".container", 
    duration: 2, 
    y:500
  });
  gsap.to(".framebottom", {
    scrollTrigger: ".container2", 
    duration: 2, 
    y:500
  });

// tl.to(".framebottom",{y:1000,duration:3
// });
// tl.to(".frametop",{y:-1000,duration:3
// });
// tl.to(".frameleft",{x:-1000,duration:1});
// tl.to(".frameright",{x:1000,duration:1});

// const t2= gsap.timeline({scrollTrigger:{
//     trigger: "#container2",
//     start: "top top",
//     end:"+=300",
//     scrub:true}});

// t2.to(".film",{y:-1300});


