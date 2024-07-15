
//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin)
    gsap.to("#HEADER__CIRCLE1", {
        x: 900,
        y: 80,
        duration: 4.5,
    })
    gsap.to("#HEADER__CIRCLE2", {
        x: -300,
        y: 60,
        duration: 4.5,
    })
    gsap.to("#HEADER__CIRCLE3", {
        x: -400,
        y: -400,
        duration: 4.5,
    })
    gsap.to("#HEADER__CIRCLE4", {
        x: 500,
        y: -400,
        duration: 4.5,
    })
    gsap.to("#HEADER__CIRCLE5", {
        x: -800,
        y: -460,
        duration: 5.5,
    })
    //TODO BOX0 
    gsap.to('#BOX0', {
        rotation: 360,
        duration: 1,
        x: -850,
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
        x: 950,
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
        x: -940,
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