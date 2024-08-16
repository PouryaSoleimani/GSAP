gsap.from("#BOX__REVIEW__1", {
    duration: 3,
    rotate: "-360",
    x: "-100vw",
    backgroundColor: "#FABB14",
    ease: "back"
})
gsap.from("#BOX__REVIEW__2", {
    duration: 2,
    rotate: 360,
    x: "100vw",
    ease: "back",
    scrollTrigger: {
        trigger: "#page2__REVIEW #BOX__REVIEW__2",
        scroller: "body",
        start: "top 150%",
        end: "top 30%",
        markers: true,
        scrub: true
    }
})

