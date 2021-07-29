console.clear();

gsap.to(".tree1", { x:-480, opacity: 1});
gsap.to(".tree2", { x:420, opacity: 1 });
gsap.to(".tree3", { x:-350, opacity: 1 });
gsap.to(".tape1", { opacity: 1 }, "+=0.1");
gsap.to(".tape2", { opacity: 1 }, "+=0.1");
gsap.to(".video-background", {duration:1.5, scaleX:4, scaleY:4, y:-360});

// gsap.to(".tape1", {duration:1, x:610, scrub:true});
// gsap.to(".tape2", {duration:1, x:-610, scrub:true});
/* The encoding is super important here to enable frame-by-frame scrubbing. */

// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4
const video = document.querySelector(".video-background");
let src = video.currentSrc || video.src;
console.log(video, src);

/* Make sure the video is 'activated' on iOS */
/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  defaults: { duration: 5 },
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

  tl.fromTo(
    video,
    {
      currentTime: 0
    },
    {
      currentTime: 10
    }
  );

// /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
// setTimeout(function () {
//     console.log("timeout");
//   if (window["fetch"]) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((response) => {
//         console.log("timeout_then");
//         var blobURL = URL.createObjectURL(response);

//         var t = video.currentTime;
//         once(document.documentElement, "touchstart", function (e) {
//             console.log("_touchstart");
//           video.play();
//           video.pause();
//         });

//         video.setAttribute("src", blobURL);
//         video.currentTime = t + 0.01;
//       });
//   }
// }, 1000);

/* ---------------------------------- */
const firstElem = document.querySelector(".panel");

const childSplit = new SplitText("#content", {
  type: "lines",
  linesClass: "split-child"
});
const parentSplit = new SplitText("#content", {
  // type: "lines",
  linesClass: "split-parent"
});

function goToSection(i, anim) {
  if(i>=2) i=i+4;
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1.3
  });
  if(anim) {
    anim.restart();
  }
  if(i==6){
    gsap.timeline().to("#title", {
    text: {value: "The Arrival of a Train<br/>at La Ciotat Station"}, scrub:true,
    duration: 3, delay: 1, ease: "none"}).from(childSplit.lines, {
      delay:0.5,
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
      scrub:true
    });
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top 99%",
    onEnter: () => goToSection(i)
  });
  ScrollTrigger.create({
    trigger: panel,
    onEnterBack: () => goToSection(i),
  });
});

ScrollTrigger.create({
  trigger: "#container",
  start:"bottom top",
  onEnterBack: () => goToSection(-1),
});

gsap.to("#title", {
  scrollTrigger:{
    trigger:".p1",
    start:"top top",
    scrub: true
  },
  text: {value: "The Arrival of a Train at La Ciotat Station"}, 
  duration: 1, delay: 1, ease: "none"})

  var t2 = gsap.timeline({scrollTrigger:{
    trigger: "#second",
    start: "top 3%",
    scrub:true
  }});
  t2.to("#Awesome", {duration:0.1, rotate:-40, x:250})
  t2.to(".video-background", {duration:2, x:210, scaleX:4.8, scaleY:4.8})
  t2.to(".film", {duration:0.2, y:-innerHeight*0.9})

  function peeloff() {
    gsap.timeline().to("#Awesome",{duration:0.1, rotate:-40, x:250,scrub:true})
        .to(window, {
      scrollTo: {y: innerHeight},delay:0.5,
      duration: 1.3
    })
    //goToSection(2);
  }