//* GSAP REVIEW 1
gsap.from("#BOX__REVIEW__1", {
    duration: 3,
    rotate: "-360",
    x: "-100vw",
    backgroundColor: "#FABB14",
    ease: "back"
})
gsap.from("#BOX__REVIEW__2", {
    duration: 4,
    x: "-200vw",
    scrollTrigger: {
        trigger: "#page2__REVIEW #BOX__REVIEW__2",
        scroller: "body",
        start: "top 150%",
        end: "top 40%",
        scrub: true,
        markers: true
    }
})

