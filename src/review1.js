//* GSAP REVIEW 1
// gsap.registerPlugin(ScrollTrigger)
// & PINK BOX 1
gsap.from("#BOX__REVIEW__1", {
    duration: 5,
    rotate: "-360",
    scale: 0,
    x: "-100vw",
    ease: "back"
})
// ! HEART
gsap.from("#heart_container", {
    duration: 5,
    rotateZ: 1440,
    scale: 0,
    scrollTrigger: {
        trigger: "#page2__REVIEW", // always set the trigger to the element's parent
        scroller: "body", // and we set the scroller to "body" 90% percent of the situations
        scrub: 1,
        start: "50% 50%",
        pin: true,
        ease: "back",
        fastScrollEnd: true,
        anticipatePin: 1,
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

// ^ CARDS
gsap.registerPlugin(ScrollTrigger)
gsap.to(".card", {
    duration: 1.5,
    y: "-100",
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".card__container",
        scroller: "body",
        start: "top top",
        end: "+=2000px",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    }
}) 
