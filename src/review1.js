//* GSAP REVIEW 1
gsap.registerPlugin(ScrollTrigger)
// ! BOX 1
gsap.from("#BOX__REVIEW__1", {
    duration: 5,
    rotate: "-360",
    scale: 0,
    x: "-100vw",
    backgroundColor: "#FABB14",
    ease: "back"
})
// ! HEART
gsap.from("#heart_container", {
    duration: 3,
    rotateZ: 720,
    scale: 0,
    scrollTrigger: {
        trigger: "#page2__REVIEW",
        scroller: "body",
        scrub: 1,
        start: "50% 50%",
        pin: true,
        ease: "back",
        fastScrollEnd: true , 
        containerAnimation: tween,
        anticipatePin: 1,
        directional: true,
        pinReparent: true,
        horizontal: true,
    }
})
// * GREEN BOX
gsap.from("#BOX__REVIEW__3", {
    scale: 0,
    opacity: 0,
    duration: 3,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#BOX__REVIEW__3",
        scroller: "body",
        scrub: true,
        start: "top 150%"
    }
})
