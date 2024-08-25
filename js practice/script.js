console.log("jay shree ram ");

let circle = document.querySelector("#circle");
let main = document.querySelector("#main");

main.addEventListener("mousemove",(dets)=>{
    // console.log(dets.clientX,dets.clientY);
      
    circle.style.left = dets.x+"px";
    circle.style.top = dets.y+"px";
})

let overlay1= document.querySelector("#overlay1");
overlay1.addEventListener("mousemove",(dets)=>{
    // console.log("ram ram");
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    document.querySelector("#elem1 img").style.left = (dets.x-200)+"px";
    document.querySelector("#elem1 img").style.top = (dets.y-350)+"px";
})

overlay1.addEventListener("mouseleave",(dets)=>{
    // console.log("ram ram");
    document.querySelector("#elem1 img").style.scale = 0;
    document.querySelector("#elem1 img").style.opacity = 0;
    // document.querySelector("#elem1 img").style.left = (dets.x-200)+"px";
})




let overlay2= document.querySelector("#overlay2");
overlay2.addEventListener("mousemove",(dets)=>{
    // console.log("ram ram");
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    document.querySelector("#elem2 img").style.left = (dets.x-680)+"px";
    document.querySelector("#elem2 img").style.top = (dets.y-350)+"px";
})

overlay2.addEventListener("mouseleave",(dets)=>{
    // console.log("ram ram");
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
})



let overlay3= document.querySelector("#overlay3");
overlay3.addEventListener("mousemove",(dets)=>{
    // console.log("ram ram");
    document.querySelector("#elem3 img").style.scale = 1;
    document.querySelector("#elem3 img").style.opacity = 1;
    document.querySelector("#elem3 img").style.left = (dets.x-1100)+"px";
    document.querySelector("#elem3 img").style.top = (dets.y-350)+"px";
})

overlay3.addEventListener("mouseleave",(dets)=>{
    // console.log("ram ram");
    document.querySelector("#elem3 img").style.scale = 0;
    document.querySelector("#elem3 img").style.opacity = 0;
})



