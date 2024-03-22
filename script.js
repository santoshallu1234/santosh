
 
 
 
 var ab = gsap.timeline()

ab.to(".loadp",{
    x:"100vw",
    stagger:0.2,
    duration:2,
    delay:2,
    "borderRadius":"50px",
    scrub:5,
   
})
ab.to(".loader",{
    "display":"none",

})
gsap.to(".content i",{
    y:30,
    duration:1,
    opacity:0,
    delay:1,
    repeat:-1
})
//  ab.from("#sec , #four",{
//  x:-100,
//    y:100,
//    duration:1,
//    delay:0.2,
 //   opacity:0,
//    scrub:0
//    
//})
gsap.to(".dot",{
  opacity:1,
    stagger:0.5,
    repeat:-1,
    duration:0.5

})
gsap.from(".cmid i",{
    y:40,
    duration:1.5,
    delay:0,
    opacity:0,
    scrollTrigger : {
        trigger:".cmid i",
        
           }
})
gsap.from(".specboxa",{

    duration:2,
    delay:0,
    opacity:0,
    scrollTrigger : {
        trigger:".specboxa",
        
        scrub:5   }
})
gsap.from(".specboxb",{

    duration:2,
    delay:0,
    opacity:0,
    
    scrollTrigger : {
        trigger:".specboxa",
       
        scrub:3  }
})
gsap.from(".spec h3",{

    duration:2,
    delay:0,
    opacity:0,
    scrollTrigger : {
        trigger:".spec",
        
        scrub:3  }
})





//scrub smoothness 
//stragger-element one by one
//font-strech
//webkit-text-stroke