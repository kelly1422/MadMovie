var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;
gsap.to("#lunar",{
  opacity:1,
  duration:3
})
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


//canvas
function init() {
    var colorarr=['rgba(213, 130, 255,1)','rgba(255, 130, 130,1)','rgba(236, 255, 166,1)','rgba(79, 255, 246,1)','rgba(255, 255, 255,1)'];
    var arr = ['zero', 'one', 'tow']; 
    // Variables
    ptcls = [];
    repPtcls = [];
    
    var starDustArea = 50;
    var starDustAmmt = 1;
    
    var refillInterval;
    var ref = 0;
    
    var mouseDown = false;
    var mouseOX;
    var mouseOY;
    var mouseNX;
    var mouseNY;
    
    canvas = document.createElement( 'canvas' );
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    $('#canvas-holder').append(canvas);
    
    ctx = canvas.getContext( '2d' );
    
    
    // Particle Object
    Ptcl = function() {};
    
    Ptcl.pt = Ptcl.prototype;
      
    Ptcl.pt.init = function(_x, _y) {
      this.x  = _x;
      this.y  = _y;
      this.r  = Math.random()*2 + 1;
      this.color =colorarr[Math.floor(Math.random() * 5)];
    };
    
    Ptcl.pt.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
      ctx.closePath();
      radgrad = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r);
  
      radgrad.addColorStop(0.3, 'rgba(79, 255, 246,1)');
      ctx.fillStyle = radgrad;
      ctx.fill();
  
    };
    
    
    
    // Functions
    
    function addPtcl(_x, _y) {
      p = new Ptcl();
      p.init(_x, _y);
      ptcls.push(p);
    }
    
    function clearPtcls() {
      ptcls.length = 0;
      repPtcls.length = 0;
      clearInterval(refillInterval);
    }
    
    function refillPtls() {
      if(repPtcls[ref] == undefined) {
        clearInterval(refillInterval);
        ref = 0;
      } else {
        ptcls.push(repPtcls[ref]);
        ref++;
      }
    }
    
    
    // Mouse Events
    $(canvas).mousedown(function(e){
      mouseDown = true;
      var offset = $(this).offset();
      addPtcl(e.clientX - offset.left, e.clientY - offset.top);
      mouseOX = e.clientX - offset.left;
      mouseOY = e.clientY - offset.top;
    });
    
    $('#clear-btn').click(function(){
      clearPtcls();
    });
    
    
    // Render Frame
    
    function loop() {
      ctx.clearRect(0,0,canvas.width, canvas.height);
      for(var i = 0; i < ptcls.length; i++) {
        ctx.globalAlpha = Math.random()*0.4 + 0.5;
        ptcls[i].draw();
      }
    }
    setInterval(loop, 1000/10);
    
    var numStars = 0;
  }
  
  init();
  //spaceship motion
  gsap.registerPlugin(MotionPathPlugin);
  // [{x:1350.0,y:650},{x:1100,y:540.0},{x:756.0,y:465.0},{x:728.0,y:375.0},{x:784.0,y:255.0},{x:896.0,y:210.0},{x:993.9999999999999,y:255.0},{x:1036.0,y:379.5},{x:993.9999999999999,y:480.0},{x:882.0,y:547.5},{x:672.0,y:577.5},{x:461.99999999999994,y:555.0},{x:280.0,y:435.0},{x:237.99999999999997,y:300.0},{x:287.0,y:165.0},{x:448.0,y:150.0}]
// let anchors = [
//   {x:1400.0,y:700},
//   {x:1200,y:610.0},
//   {x:1100.0,y:550.0},
//   {x:1065,y:465.0},
//   {x:1105,y:390.5},
//   {x:1185 , y:360},
//   {x: 1270, y:400},
//   {x: 1300, y:470},
//   {x: 1260, y:560},
//   {x: 1180, y:615},
//   {x: 980, y:650},
//   {x: 700, y:630},
//   {x: 450, y:550},
//   {x: 340, y:460},
//   {x: 310, y:345},
//   {x: 350, y:250},
//   {x: 420, y:210},
//   {x: 490, y:205},
//   {x: 560, y:220},
//   {x: 650, y:250}
//   ],
let anchors =[{x:1400*innerWidth/1536,y:700*innerHeight/754},{x:1200*innerWidth/1536,y:610*innerHeight/754},{x:1100*innerWidth/1536,y:550*innerHeight/754},{x:1065*innerWidth/1536,y:465*innerHeight/754},{x:1105*innerWidth/1536,y:390*innerHeight/754},{x:1185*innerWidth/1536,y:360*innerHeight/754},{x:1270*innerWidth/1536,y:400*innerHeight/754},{x:1300*innerWidth/1536,y:470*innerHeight/754},{x:1260*innerWidth/1536,y:560*innerHeight/754},{x:1180*innerWidth/1536,y:615*innerHeight/754},{x:980*innerWidth/1536,y:650*innerHeight/754},{x:700*innerWidth/1536,y:630*innerHeight/754},{x:450*innerWidth/1536,y:550*innerHeight/754},{x:340*innerWidth/1536,y:460*innerHeight/754},{x:310*innerWidth/1536,y:345*innerHeight/754},{x:350*innerWidth/1536,y:250*innerHeight/754},{x:420*innerWidth/1536,y:210*innerHeight/754},{x:490*innerWidth/1536,y:205*innerHeight/754},{x:560*innerWidth/1536,y:220*innerHeight/754},{x:650*innerWidth/1536,y:250*innerHeight/754}],
    rawPath = MotionPathPlugin.arrayToRawPath(anchors, {curviness:0.5}),
    path = document.querySelector("#path"), pathreveal=document.querySelector("#pathreveal"),
    svg = document.querySelector("#svg");

path.setAttribute("d", MotionPathPlugin.rawPathToString(rawPath));


pathreveal.setAttribute("d", MotionPathPlugin.rawPathToString(rawPath));

// animate with drawSVG
/*
gsap.from(path, {
  duration: 6,
  drawSVG: 0,
  ease: "none",
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.4
});
*/

var tl = gsap.timeline();
tl.to("#ship", {
  duration: 3, 
  yoyo: true,
  ease: "none",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
},0);
tl.from(path, {
  duration: 3,
  drawSVG: 0,
  ease: "none",
  yoyo: true,
  repeatDelay: 0.4
},0);
tl.pause(0.01);
gsap.registerPlugin(SplitText);

function changeLunar(){
  document.getElementById("lunar").src="./source/lunarface2.png";
  document.getElementById("ship").src="";
}
document.querySelector("#ship").onclick =()=>{
   tl.restart();
   tl.call(changeLunar);
}
document.querySelector("#lunar").onclick =()=>{
  document.getElementById("lunar").src="./source/lunarface1.png";
  document.getElementById("ship").src="./source/ship2.png";
  tl.reverse();

}
var mySplitText = new SplitText("#content", {type:"chars, words"}),
    numChars = mySplitText.chars.length;

document.querySelector("#info").onclick=()=>{
  var tl2 = gsap.timeline();
  tl2.to(".infobox",{
    y: -innerHeight,
    duration:2
  }).to("#title", {
    text: {value: "A trip to the moon"}, scrub:true,
    duration: 2, ease: "none"}).add('reveal').to("#poster",{
      x:-300,duration:2
    }).to("#content",{
      x:250,duration:2,
      opacity:1
    },'reveal');
    gsap.to("#infoimg", {opacity:0});
}
document.querySelector("#info2").onclick=()=>{
  var tl2 = gsap.timeline();
  tl2.to(".infobox",{
    y: +innerHeight,
    duration:2
  }).to("#title", {
    text: {value: "A trip to the moon"}, scrub:true,
    duration: 2, ease: "none"}).add('reveal').to("#poster",{
      x:300,duration:2
    }).to("#content",{
      x:-250,duration:2,
      opacity:1
    },'reveal');
    gsap.to("#infoimg", {opacity:1});
}
console.log(innerHeight,innerWidth);