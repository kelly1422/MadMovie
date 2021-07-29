gsap.registerPlugin(ScrollTrigger);

const firstElem = document.querySelector(".panel");

// function goToSection(i) {

//   gsap.to(window, {
//     scrollTo: {y: i*innerHeight + firstElem.offsetTop},
//     duration: 1.3
//   });
// }

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top 99%",
//     onEnter: () => goToSection(i)
//   });
//   ScrollTrigger.create({
//     trigger: panel,
//     onEnterBack: () => goToSection(i),
//   });
// });

// var t1 = gsap.timeline({scrollTrigger:{
//   trigger: "#first",
//   start: "top top",
//   scrub:true
// }});

// t1.to(".film",{ duration:3, y:-innerHeight })
// var t2 = gsap.timeline({scrollTrigger:{
//   trigger: "#second",
//   start: "top 3%",
//   scrub:true
// }});
// t2.to("#Awesome", {duration:0.1, rotate:-40, x:250})



// function peeloff() {
//   gsap.timeline().to("#Awesome",{duration:0.1, rotate:-40, x:250,scrub:true})
//       .to(window, {
//     scrollTo: {y: 3*innerHeight + firstElem.offsetTop},delay:0.5,
//     duration: 1.3
//   })
//   //goToSection(2);
// }
