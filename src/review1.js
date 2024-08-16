//* GSAP REVIEW 1
gsap.from("#BOX__REVIEW__1", {
    duration: 3,
    rotate: "-360",
    x: "-100vw",
    backgroundColor: "#FABB14",
    ease: "back"
})
gsap.from("#heart", {
    duration: 3,
    rotate: 720,
    x: "100vw",
    scrollTrigger: {
        trigger: "#heart",
        scroller: "body",
        scrub: true,
        start: "top 100%"
    }
})

