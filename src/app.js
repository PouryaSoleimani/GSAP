//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    gsap.to("#HEADER__CIRCLE1", {
        x: 800,
        y: 300,
        duration: 6.5,
    })
    gsap.to("#HEADER__CIRCLE2", {
        x: -800,
        y: 300,
        duration: 6.5,
    })
    gsap.to("#HEADER__CIRCLE44", {
        x: -800,
        y: 300,
        duration: 6.5,
    })
    gsap.to("#HEADER__CIRCLE3", {
        x: -700,
        y: -200,
        duration: 6.5,
    })
    gsap.to("#HEADER__CIRCLE4", {
        x: 800,
        y: -200,
        duration: 6.5,
    })
    //TODO BOX0 
    gsap.to('#BOX0', {
        rotation: 360,
        duration: 1,
        x: -450,
        scrollTrigger: {
            trigger: "#BOX0",
            toggleActions: "restart pause reverse restart",
            scrub: true
        }
    })
    //! BOX1 
    gsap.to('#BOX1', {
        rotation: 360,
        duration: 1,
        x: 450,
        scrollTrigger: {
            trigger: "#BOX1",
            toggleActions: "restart pause reverse restart",
            scrub: true
        }
    })
    //^ BOX2
    gsap.to("#BOX2", {
        rotation: 360,
        duration: 1,
        x: -650,
        scrollTrigger: {
            trigger: "#BOX2",
            toggleActions: "restart pause reverse restart",
            scrub: true
        }
    })
    //& TEXT
    gsap.to("#NEWTEXT", {
        duration: 3,
        text: "WELCOME TO GSAP EVERYBODY !!!!",
        ease: "none",
        toggleActions: "restart pause reverse restart"
    })


});