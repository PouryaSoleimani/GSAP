//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    //TODO BOX0 
    gsap.to('#BOX0', {
        rotation: 90,
        duration: 1,
        x: 650,
        y: 120,
        scrollTrigger: {
            trigger: "#BOX0",
            start: "top top",
            end: "left bottom"
        }
    })
    //! BOX1 
    gsap.to('#BOX1', {
        rotation: 180,
        duration: 50,
        x: 650,
        scrollTrigger: {
            trigger: "#BOX1",
            toggleActions: "restart pause reverse restart",
            scrub: true,
        }
    })
    //^ BOX2
    gsap.to("#BOX2", {
        rotation: 360,
        duration: 50,
        x: -650,
        scrollTrigger: {
            trigger: "#BOX2",
            toggleActions: "restart pause reverse restart",
            scrub: true,
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