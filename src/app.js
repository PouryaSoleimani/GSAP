
//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin)
    gsap.to("#HEADER__CIRCLE1", {
        x: -"60%",
        y: "-250%",
        duration: 2,
    })
    gsap.to("#HEADER__CIRCLE2", {
        x: "-50%",
        y: "-30%",
        duration: 2,
    })
    gsap.to("#HEADER__CIRCLE3", {
        x: "50%",
        y: "-180%",
        duration: 3,
    })
    gsap.to("#HEADER__CIRCLE4", {
        x: "70%",
        y: "-30%",
        duration: 1,
    })
    gsap.to("#HEADER__CIRCLE5", {
        x: "-20%",
        y: "-200%",
        duration: 3.5,
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