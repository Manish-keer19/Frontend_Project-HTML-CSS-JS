
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
console.log("jay shree ram ");

var video_cont = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");
function vedio_animation() {

    video_cont.addEventListener("mouseenter", () => {

        gsap.to(playbtn, {
            opacity: 1,
            scale: 1,
            duration: .2,
            delay:.1,
        })
    })


    video_cont.addEventListener("mouseleave", () => {

        gsap.to(playbtn, {
            opacity: 0,
            scale: 0,
            duration: .4,
            delay: .2,
        })
    })
}

vedio_animation();


function heading_anime() {

    gsap.from("#pg1 h1", {
        y: 100,
        //   scale:0,
        opacity: 0,
        duration: .6,
        stagger: .1,
        delay: .7

    })
}

heading_anime();

function moveplaybtn() {

    video_cont.addEventListener("mousemove", (dets) => {


       gsap.from(playbtn,{
           x:dets.clientX,
           y:dets.clientY,
       })  


    })
}

moveplaybtn();


 document.addEventListener("mousemove",(dets)=>{
    // console.log("mouse move");
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
 })

document.querySelectorAll(".box").forEach((dets)=>
{
    dets.addEventListener("mouseenter",()=>{
        // console.log("mouse enter");
        gsap.to("#cursor",{
           scale:1

        })
    });

    dets.addEventListener("mouseleave",()=>{
        // console.log("leave");
        gsap.to("#cursor",{
        scale:0
        })
    });
})