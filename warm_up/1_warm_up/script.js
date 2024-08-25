let rect = document.querySelector(".rect");
rect.addEventListener("mousemove", (dets) => {
  let rectangleLocation = rect.getBoundingClientRect();
  console.log(rectangleLocation)
  let insideRectVal = dets.clientX - rectangleLocation.left;
  if (insideRectVal < rectangleLocation.width / 2) {
    let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectVal);
    // console.log(" mouse val is ",dets.clientX)
    console.log(redColor);
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: "power4.inOut",
    });
  }

  else{
    let bluecolor = gsap.utils.mapRange(rectangleLocation.width / 2,rectangleLocation.width, 0, 255, insideRectVal);
    // console.log(" mouse val is ",dets.clientX)
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: "power4.inOut",
    });
  }

});
