gsap.from("#BOX__REVIEW__1", {
    duration: 2,
    rotate: "-360",
    x: "-100vw",
    ease: "back"
})
gsap.from("#BOX__REVIEW__2", {
    duration: 2,
    rotate: 360,
    x: "100vw",
    ease: "back" ,  
    scrollTrigger  : {
        trigger : "#BOX__REVIEW__2" , 
        scroller : "body"
    }
})