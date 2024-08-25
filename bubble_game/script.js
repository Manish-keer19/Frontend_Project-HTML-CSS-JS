console.log("jay shre ram ");

var hitnum;
var RandNum;
var timer = 60;
var score = 0;
var num ;

let music = new Audio("food.mp3");
music.play();
function Makebubble() {


    let clutter = "";
    for (let i = 0; i <= 125; i++) {
        RandNum = Math.floor(Math.random() * 20+1)
        clutter += `<div class='bubble'>${RandNum}</div>`;
    }

    document.querySelector("#pbtn").innerHTML = clutter;
}

function Start_Timmer() {
    var tm;
    setInterval(() => {
        if(timer>=1){

            tm = timer--;
            document.getElementById("timervl").textContent = tm;
        
        }
        else{
            clearInterval();
             document.getElementById('pbtn').innerHTML=`<h1>Game Over</h1> <h1>Your Score is:${score} </h1> `;

        }
    }, 1000);

}

function changeHit(){
     hitnum = Math.floor(Math.random()*20+1);
     document.getElementById("hitval").textContent= hitnum;
}

function increas_score(){
     score+=10;
     document.getElementById("sc").textContent = score;
}

let p = document.getElementById("pbtn");
p.addEventListener("click",(detail)=>{
   num = ( Number(detail.target.textContent));
   if(num===hitnum){
    Makebubble();
    increas_score();
    changeHit();
}

})



Makebubble();
Start_Timmer();
changeHit()

