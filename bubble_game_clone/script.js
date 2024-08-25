console.log("jay shree ram ");

let timer= 60;
let score = 0;
let hitnum;
let pannel = document.querySelector("#pannel-btm");

function make_bubble(){
    
    let clutter ="";
    
    for( let i = 0 ;i<=150;i++){
        let randno= Math.floor(Math.random()*30+1)
        // console.log(randno)
        clutter += `<div class= box > ${randno}</div>`
        pannel.innerHTML = clutter;
    }
}

 function start_timer(){
    setInterval(()=>{
     if(timer<=0){
        clearInterval();
     }
     else{
        timer--;
      document.querySelector("#timer").textContent = timer;
     }
    },1000)

 }
 function changeHit(){
    hitnum = Math.floor(Math.random()*30+1)
    document.querySelector("#hitno").textContent = hitnum;
 }

 function increse_score(){
        score+=10;
    document.querySelector("#scoreno").textContent = score;
}
    

pannel.addEventListener("click",(dets)=>{
    //   console.log(dets.target.textContent)
      let num = (Number(dets.target.textContent));
//       console.log(hitnum);
//       console.log(num);
         if(num===hitnum){
            // console.log("sahi he bro")
            make_bubble();
            increse_score();
            changeHit();
         }

})


make_bubble();

start_timer();
changeHit();