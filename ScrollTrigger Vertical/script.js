gsap.to(".page1, img",{
    width:"100%",
    scrollTrigger:{
        trigger:".page2 ",
        // pin use krte hai to parent ko trigger krte hai na ki uske child ko yeh yaad rakhna hai bs
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true

    }
})

var h1= document.querySelector="h1"
gsap.from("h1",{

  x:1000,
    // rotate:360,
    duration:2,
    delay:1,
    scale:0.5
     

    }
)