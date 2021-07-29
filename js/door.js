console.clear();

gsap.set("#demo",{scaleX:0, scaleY:0, x:170});
gsap.set("#demo2",{scaleX:0, scaleY:0, x:-150});
gsap.to(".bodyy", { duration: 1, backgroundColor: '#34375e', ease: "none" }, 0)
gsap.to(".half", { opacity: 1 , x:630}); 
gsap.to(".half2", { opacity: 1, x:-630}); 
gsap.to(".image1", { opacity: 1 });  
gsap.to(".image2", { opacity: 1 });  

gsap.to(".pp", { opacity: 1, y:-150 });  
gsap.to(".open", { opacity: 1, y:-200 });  
gsap.to(".sound", { opacity: 1, y:-130}); 
//--------------------------------------------------------------

var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  gsap.timeline()
    .to(".back_1", {opacity:1})
    .to(".back_1", {y:80})
  element.classList.toggle("doorOpen");
}

// var element2 = document.querySelector("#demo");
// element2.addEventListener("click", toggleDoor);


//------------------------------------------------------------

var element2 = document.querySelector(".door2");
element2.addEventListener("click", toggleDoor2);

function toggleDoor2() {
    gsap.timeline()
    .to(".back_2", {opacity:1})
    .to(".back_2", {y:80})
  element2.classList.toggle("doorOpen2");
}

// var element4 = document.querySelector("#demo2");
// element4.addEventListener("click", toggleDoor2);

//-------------------------------------------------------------

const svg = document.querySelector("#demo");
const tl = new TimelineMax();
let pt = svg.createSVGPoint();

// const svg2 = document.querySelector("#demo2");
// const t2 = new TimelineMax();
// let pt2 = svg2.createSVGPoint();

const ratio = 0.5625;


tl.to("#masker", {duration: 2, attr:{r:2400}, ease:"power2.in"}); //누르면 컬러
tl.reversed(true); //
// t2.to("#masker2", {duration: 2, attr:{r:2400}, ease:"power2.in"}); //누르면 컬러
// t2.reversed(true); //

function mouseHandler() {
  tl.reversed(!tl.reversed());
}

function getPoint(evt){
  pt.x = evt.clientX; 
  pt.y = evt.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function mouseMove(evt) {
  let newPoint = getPoint(evt);
  gsap.set("#dot", {attr:{cx:newPoint.x, cy:newPoint.y}});
  gsap.to("#ring, #masker", 0.88, {attr:{cx:newPoint.x, cy:newPoint.y}, ease:"power2.out"});
 }

// const image1 = document.getElementsByClassName("image1");
window.addEventListener("mousedown", mouseHandler);
window.addEventListener("mouseup", mouseHandler);
window.addEventListener("mousemove", mouseMove);

//-----------------------------------------------------------------

const svg2 = document.querySelector("#demo2");
const t2 = new TimelineMax();
let pt2 = svg2.createSVGPoint();


t2.to("#masker2", {duration: 2, attr:{r:2400}, ease:"power2.in"}); //누르면 컬러
t2.reversed(true); //

function mouseHandler2() {
  t2.reversed(!t2.reversed());
}

function getPoint2(evt){
  pt2.x = evt.clientX; 
  pt2.y = evt.clientY;
  return pt2.matrixTransform(svg2.getScreenCTM().inverse());
}

function mouseMove2(evt) {
  let newPoint = getPoint2(evt);
  gsap.set("#dot2", {attr:{cx:newPoint.x, cy:newPoint.y}});
  gsap.to("#ring2, #masker2", 0.88, {attr:{cx:newPoint.x, cy:newPoint.y}, ease:"power2.out"});
 }


window.addEventListener("mousedown", mouseHandler2);
window.addEventListener("mouseup", mouseHandler2);
window.addEventListener("mousemove", mouseMove2);

// newSize();
// window.addEventListener("resize", newSize);

//-----------------------------------------------------------------------

function image1move(){
    gsap.timeline()
    .to("#demo", {})
    .to("#demo", {scaleX:1, scaleY:1, x:10, y:-20});
}

function image2move(){
    gsap.timeline()
    .to("#demo2", {})
    .to("#demo2", {scaleX:1, scaleY:1, x:10, y:-20});
}

function back1(){
    gsap.to("#demo",{scaleX:0, scaleY:0});
    gsap.timeline()
    .to(".back_1", {opacity:0})
    .to(".back_1", {y:-10})
    element.classList.toggle("doorOpen");
}

function back2(){
    gsap.to("#demo2",{scaleX:0, scaleY:0});
    gsap.timeline()
    .to(".back_2", {opacity:0})
    .to(".back_2", {y:-10})
    element2.classList.toggle("doorOpen2");
}

var audio = new Audio("./source/SeetheWizard.mp3");
var play = 0;
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.3;

document.querySelector(".sound").onclick = function() {
    if(play){
        audio.pause();
        play=0;
        document.querySelector(".sound").src="./source/mute.png";
    }
    else{
        // audio.load();
        audio.play();
        play=1;
        document.querySelector(".sound").src="./source/volume.png";
    }
}