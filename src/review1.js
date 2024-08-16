gsap.from("#BOX__REVIEW__1", {
    duration: 3,
    rotate: "-360",
    x: "-100vw",
    backgroundColor: "#FABB14",
    ease: "back"
})
gsap.from("#BOX__REVIEW__2", {
    duration: 1.5,
    scale: 0,
    rotate: 720,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#page2__REVIEW #BOX__REVIEW__2",
        scroller: "body",
        start: "top 150%",
        end: "top 50%",
        scrub: true,
        markers: true
    }
})

