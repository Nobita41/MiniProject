// gsap.to(".box",{

//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     // backgroundColor:"Blue"

// })
// gsap.from(".box",{
// 
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     // backgroundColor:"Blue"

// })
var t1= gsap.timeline()
t1.to(".box1",{
    x:1000,
    rotate:360,
    duration:2,
    delay:1,
    scale:0.5
})
gsap.to(".box2",{
    x:1000,
    rotate:360,
    duration:2,
    delay:3,
    scale:0.5
})
gsap.to(".box3",{
    x:1000,
    rotate:360,
    duration:2,
    delay:5,
    scale:0.5
})