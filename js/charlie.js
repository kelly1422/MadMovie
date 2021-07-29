console.clear();
var t1 = gsap.timeline();
t1.to("body", { duration: 1, backgroundColor: '#ecc7c7', ease: "none" }, 0)
t1.to(".bar",{
    opacity:1
});
t1.to(".ticket",{
    opacity:1,
}).to(".ticket",{
    y:37+"vh",
    duration:1
}).to(".ticket",{
    opacity:0
}).to(".button-container",{
    opacity:1
}).to(".eyes",{opacity:1}).to(".hat",{opacity:1})
gsap.to(".sound", { opacity: 1, y:-130}); 
gsap.set(".correct",{scaleX:0, scaleY:0});
gsap.set(".wrong",{scaleX:0, scaleY:0});
// var bars=gsap.utils.toArray(".bar");
var bars=["#bar0","#bar1","#bar2","#bar3","#bar4"];
console.log(bars);

var index=[0,1,2,3,4];
var t1 = gsap.timeline();

var shufflechk=0;
document.querySelector("button").onclick=()=>{
    gsap.to(".start", {opacity:0});
    gsap.to(".logo",{opacity:1});
    if(shufflechk==0){
    shufflechk=1;
    var i=0;
while(i<10){
    var n = Math.floor(Math.random() * 5);
    var m = Math.floor(Math.random() * 5);
    while(n==m){
        m= Math.floor(Math.random() * 5);
    }
    console.log(n,m);

    var n2=index[n]-n;
    var m2=index[m]-m;

    t1.add(i);
    t1.to(bars[n],{
        x:(m-n-n2)*18+"vw",
      },i)
    t1.to(bars[m],{
        x:(n-m-m2)*18+"vw"
      },i);

      var tmp=bars[n];
      bars[n]=bars[m];
      bars[m]=tmp;

      var tmp2=index[n];
      index[n]=index[m];
      index[m]=tmp2;
      
      console.log(bars);
      console.log(index);

      i++;
    
}
t1.to(".ticket",{
    x:(index.indexOf(2)-2)*18+"vw"
}).to(".ticket",{opacity:1})
}
t1.to(".choco",{
    opacity:1
})
}

var balls = document.getElementsByClassName("ball");
document.onmousemove = function () {
    var x = event.clientX * 60 / window.innerWidth + "%";
    var y = event.clientY * 60 / window.innerHeight + "%";
    for (var i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
    }
}
document.querySelector("#bar0").onclick=()=>{ 
    if(shufflechk){
        gsap.to("#bar0",{opacity:0})
        gsap.set(".correct",{scaleX:0, scaleY:0});
        gsap.to(".correct", {opacity:0});
        gsap.to(".text1", {opacity:0});
        gsap.to(".text2", {opacity:1});
        gsap.to(".wrong", {scaleX:1, scaleY:1});
        gsap.to(".wrong", {opacity:1});
    }  
}
document.querySelector("#bar1").onclick=()=>{ 
    if(shufflechk){
        gsap.to("#bar1",{opacity:0})
        gsap.set(".correct",{scaleX:0, scaleY:0});
        gsap.to(".correct", {opacity:0});
        gsap.to(".text1", {opacity:0});
        gsap.to(".text2", {opacity:1});
        gsap.to(".wrong", {scaleX:1, scaleY:1});
        gsap.to(".wrong", {opacity:1});
    }  
}
document.querySelector("#bar3").onclick=()=>{ 
    if(shufflechk){
        gsap.to("#bar3",{opacity:0})
        gsap.set(".correct",{scaleX:0, scaleY:0});
        gsap.to(".correct", {opacity:0});
        gsap.to(".text1", {opacity:0});
        gsap.to(".text2", {opacity:1});
        gsap.to(".wrong", {scaleX:1, scaleY:1});
        gsap.to(".wrong", {opacity:1});
    }  
}
document.querySelector("#bar4").onclick=()=>{ 
    if(shufflechk){
        gsap.to("#bar4",{opacity:0})
        gsap.set(".correct",{scaleX:0, scaleY:0});
        gsap.to(".correct", {opacity:0});
        gsap.to(".text1", {opacity:0});
        gsap.to(".text2", {opacity:1});
        gsap.to(".wrong", {scaleX:1, scaleY:1});
        gsap.to(".wrong", {opacity:1});
    }  
}




document.querySelector("#bar2").onclick=()=>{
    if(shufflechk){
        gsap.to("#bar2",{
            opacity:0
        })
        gsap.set(".wrong",{scaleX:0, scaleY:0});
    gsap.to(".wrong", {opacity:0});
    gsap.to(".text2", {opacity:0});
    gsap.to(".text1", {opacity:1});
    gsap.to(".correct", {scaleX:1, scaleY:1});
    gsap.to(".correct", {opacity:1});
    for(i=0; i<200; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 10);
    console.log(randomAnimationDelay)
  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.left=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }
}
  }

//---------------------------------------------------------------

var canvas,ctx;
   var vertexes = [];
   var diffPt = [];var autoDiff = 1000;
   var verNum = 250;
   var canvasW = window.innerWidth+40;
   var addListener = function( e, str, func ) {
      if( e.addEventListener ) {
         e.addEventListener( str, func, false );
      }else if( e.attachEvent ) {
         e.attachEvent( "on" + str, func );
      }else {
         
      }
   };
   
   addListener( window, "load", init );
   
   function resize(){
      canvasW = document.getElementById('container').offsetWidth + 40;   initCanvas(canvasW,window.innerHeight);
         var cW = canvas.width;
         var cH = canvas.height;
         for(var i = 0;i < verNum;i++)
            vertexes[i] = new Vertex(cW / (verNum -1) * i , cH /3,cH/3);
         initDiffPt();
      var win_3 = window.innerWidth/3;

   }
   function init(){
      resize();
      var FPS =30;
      var interval = 1000 / FPS >> 0;
      var timer = setInterval( update, interval );
      if ( window.addEventListener ) addListener( window, "DOMMouseScroll", wheelHandler );
      addListener( window, "mousewheel", wheelHandler );
      addListener(window,"resize",resize);
      
      canvas.onmousedown=function(e)
      {
            //div.innerHTML=e.clientX+":"+e.clientY;
            //var mx = document.getElementById("mx");
            
            //alert(1);
      var mouseX,mouseY;
            if (e) {
               mouseX = e.pageX;
               mouseY = e.pageY;
            }else {
            mouseX = event.x + document.body.scrollLeft;
            mouseY = event.y + document.body.scrollTop;
            }
            
            
            if(window.innerHeight/3 - mouseY < 50 && window.innerHeight/3 - mouseY> -50)
               //diffPt[150] = autoDiff;
               {
               autoDiff = 1000;
               if(mouseX<canvas.width-2){
                  xx = 1 + Math.floor((verNum - 2) * mouseX / canvas.width);
                  
                  diffPt[xx] = autoDiff;
               }
               
               }
      }
   }
   
   var wheelHandler = function( e ) {
         var s = ( e.detail ) ? -e.detail : e.wheelDelta;
         s > 0 ? ( dd > 15 ? dd-- :  dd=dd) : ( dd < 50 ? dd++ : dd=dd );
   };
   
   function initDiffPt(){
      for(var i=0;i<verNum;i++)
         diffPt[i]= 0;
   }
   var xx = 150;
   var dd = 15;
   
   function update(){
      //ctx.rect(50,20,280,620);
      //ctx.stroke();
      //ctx.clip();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      autoDiff -= autoDiff*0.85;
      diffPt[xx] = autoDiff;
         for(var i=xx-1;i>0;i--)
            {
                var d = xx-i;
               if(d > dd)d=dd;
               diffPt[i] -= (diffPt[i]-diffPt[i+1])*(1-0.01*d);
            }
         for(var i=xx+1;i<verNum;i++)
            {
                var d = i-xx;
               if(d > dd)d=dd;
               diffPt[i] -= (diffPt[i]-diffPt[i-1])*(1-0.01*d);
            }
      for(var i = 0;i < vertexes.length;i++){
         vertexes[i].updateY(diffPt[i]);
      }

      draw();
      
   }
   var color1="#57323c";
   var color2 = "#84554B";
   function draw(){
      ctx.beginPath();
      ctx.moveTo(0,window.innerHeight);
      ctx.fillStyle=color1;
      ctx.lineTo(vertexes[0].x,vertexes[0].y);
      for(var i = 1;i < vertexes.length;i++){
         ctx.lineTo(vertexes[i].x,vertexes[i].y);
      }
      ctx.lineTo(canvas.width,window.innerHeight);
      ctx.lineTo(0,window.innerHeight);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0,window.innerHeight);
      ctx.fillStyle=color2;
      ctx.lineTo(vertexes[0].x+15,vertexes[0].y+5);
      for(var i = 1;i < vertexes.length;i++){
         ctx.lineTo(vertexes[i].x+15,vertexes[i].y+5);
      }
      ctx.lineTo(canvas.width,window.innerHeight);
      ctx.lineTo(0,window.innerHeight);
      ctx.fill();

   }
   function initCanvas(width,height){
      canvas = document.getElementById("canvas");
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");
   }
      
   function Vertex(x,y,baseY){
      this.baseY = baseY;
      this.x = x;
      this.y = y;
      this.vy = 0;
      this.targetY = 0;
      this.friction = 0.15;
      this.deceleration = 0.95;
   }
      
   Vertex.prototype.updateY = function(diffVal){
      this.targetY = diffVal + this.baseY;
      this.vy += this.targetY - this.y
      this.y += this.vy * this.friction;
      this.vy *= this.deceleration;
   }
   var audio = new Audio("./source/welcome.mp3");
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