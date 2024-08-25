
let box = document.querySelector("#box")

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference between previously
        // called and current called timings
        //  console.log(now-prev, delay);

        // If difference is greater than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread operator here
            // returning the function with the
            // array of arguments
            return func(...args);
        }
    }
}





//  console.log(dets.clientX,dets.clientY)
box.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    // console.log(div);
    div.classList.add("img-box");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
   let img =  document.createElement("img");
   img.setAttribute("src","https://media.istockphoto.com/id/516282892/photo/hindu-om-icon.jpg?s=2048x2048&w=is&k=20&c=tc2LAofn7S5AEixPXA4zL6DlOcN1XacaQ5LkhAutTwc=")

   div.appendChild(img);

    document.body.appendChild(div);
    gsap.from(".img-box img",{
         duration:1,
         ease:Power3.inOut,

    })

    setInterval(()=>{
        div.remove();
    },700)

    
}, 300));







