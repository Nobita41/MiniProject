

gsap.from(".page1 .box",{
    scale:0,
    rotate:360,
    delay:2,
    duration:2,
    opacity:0,
  

})
gsap.from(".page2 .box",{
    scale:0,
    rotate:360,
    delay:2,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        start:"top 50%",
        markers:true

    }



})
