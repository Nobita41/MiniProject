

//start
//for only one elment targer animantion
// var h1Text= document.querySelector(".first_h1").textContent
// var splitText=h1Text.split("")
// // console.log(splitText)

// var clutter =""
// splitText.forEach(function(elem){
//     // console.log(elem)
//     clutter += `<span>${elem}</span>`
// })
// console.log(clutter)
// document.querySelector(".first_h1").innerHTML=clutter



// gsap.to(".page2 h1 span",{
//     color:"#E3E3C4",
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".page2 h1 ",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 10%",
//         scrub:1
//     }

// })
//end

function locoMotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function textSplitting(){
    var allh1=document.querySelectorAll(".page2 h1")

    allh1.forEach(function(elem){
        var clutter=""
        var h1text=elem.textContent
        var splitedText= h1text.split("")
        splitedText.forEach(function(e){
            clutter+=`<span>${e}</span>`
        })
        elem.innerHTML=clutter
    })
}


function gsapAnimation(){
    gsap.to(".page2 h1 span",{
        color:"#E3E3C4",
        stagger:0.1,
        scrollTrigger:{
            trigger:".page2 h1 ",
            scroller:".main",
            markers:false,
            start:"top 45%",
            end:"top -20%",
            scrub:2
        }
    
    })
}
locoMotiveAnimation()
textSplitting()
gsapAnimation()