let muted = true,
    n = 7;

gsap.timeline()
    .set('#container', {perspective:5000})
    .set('#soundBtn', {width:16, height:32, left:'50%', top:'100%', x:-8, y:-40, cursor:'pointer', opacity:0.5});

var img = [];
img[0]="./source/fast_poster.jpg";
img[1]="./source/pulp_poster.jpg";
img[2]="./source/poster_oz.jpg";
img[3]="./source/poster_charlie.jpg";
img[4]="./source/poster_moon.jpg";
img[5]="./source/poster_train.jpg";
img[6]="./source/2001_poster.png";
img[7]="./source/godfather_poster.jpg";

var ref =[];
ref[0]="aaa.html";
ref[1]="tothemoon.html";
ref[2]="door.html";
ref[3]="charlie.html";
ref[4]="tothemoon.html";
ref[5]="aaa.html";
ref[6]="door.html";
ref[7]="door.html";


// gsap.utils.toArray(".box").forEach((box, i) => {
//     gsap.set(box, {
//         left:'50%',
//         top:'60%',
//         x:-100,
//         y:-300,
//         z:500,
//         width:300,
//         height:450,
//         borderRadius:20,
//         background:()=>'hsl('+(i/n*200)+',100%,50%)'
//       });
      
//       gsap.fromTo(box, {
//         scaleY:0,
//         opacity:0,
//         zIndex:-i,
//         rotationY:90+i/n*20,
//         transformOrigin:String("50% 50% -900%")
//       },{
//         scaleY:1,
//         opacity:0.7,
//         duration:1,
//         delay:1-0.5*(i/n),
//         ease:'elastic'
//       })
      
//       box.onmouseenter = (e)=>{
//         if (!muted){
//           a.currentTime=0;
//           a.volume=0.15;
//           a.play();
//         }
//         gsap.to(box, {duration:0.3, opacity:1, scaleY:1.2, scaleX:1.2, ease:'back.out(3)'});
//       }
      
//       box.onmouseleave = (e)=>{
//         gsap.to(box, {duration:0.4, opacity:0.7, scaleY:1, scaleX:1});
//       }
//   });

for (let i=0; i<n; i++){ 
  
  let b = document.createElement('div'),
      a = new Audio('https://assets.codepen.io/721952/chime'+(n-i)+'.mp3'),
      c = document.createElement('img');
      d = document.createElement('a');
  
  b.classList.add('box');
  document.getElementById('container').appendChild(b);
  b.appendChild(a);
  d.href=ref[i];
  c.src=img[i];
  c.classList.add('posterlist');
  b.append(d);
  d.append(c);

  gsap.set(b, {
    left:'50%',
    top:'60%',
    x:-100,
    y:-300,
    z:500,
    width:290,
    height:410,
    borderRadius:20,
    background:()=>'hsl('+(i/n*200)+',100%,50%)'
  });
  
  gsap.fromTo(b, {
    scaleY:0,
    opacity:0,
    zIndex:-i,
    rotationY:90+i/n*20,
    transformOrigin:String("50% 50% -900%")
  },{
    scaleY:1,
    opacity:0.7,
    duration:1,
    delay:1-0.5*(i/n),
    ease:'elastic'
  })
  
  b.onmouseenter = (e)=>{
    if (!muted){
      a.currentTime=0;
      a.volume=0.15;
      a.play();
    }
    gsap.to(b, {duration:0.3, opacity:1, scaleY:1.2, scaleX:1.2, ease:'back.out(3)'});
  }
  
  b.onmouseleave = (e)=>{
    gsap.to(b, {duration:0.4, opacity:0.7, scaleY:1, scaleX:1});
  }
}

window.onmousemove = (e)=>{
  gsap.to('.box', {duration:0.6, rotationY:(i)=>45+i/n*205+90*(e.clientX/window.innerWidth) });
}


document.getElementById('soundBtn').onclick = (e)=>{
  gsap.timeline()
      .to('#soundBtn', {width:()=>(muted)?16:32, duration:0.15, ease:'power3.in'}, 0)
      .to('#soundBtn', {x:()=>(muted)?-8:-16, duration:0.3, ease:'back.out(2)'}, 0)
  muted=!muted;
}

// function pass(){

// }