
//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin, Flip)

    //^ SQUARES
    gsap.to("#SQUARE__1", {
        x: "10%",
        y: "-190%",
        duration: 1.5,
        rotation: 140
    })
    gsap.to("#SQUARE__2", {
        x: "-30%",
        y: "-10%",
        duration: 1.5,
        rotation: 65
    })
    gsap.to("#SQUARE__3", {
        x: "20%",
        y: "-240%",
        duration: 1.7,
        rotation: 100
    })
    gsap.to("#SQUARE__4", {
        x: "90%",
        y: "-15%",
        duration: 1.5,
        rotation: 240
    })
    gsap.to("#SQUARE__5", {
        x: "20%",
        y: "-200%",
        duration: 1.5,
        rotation: 120
    })
    gsap.to("#SQUARE__6", {
        x: "40%",
        y: "-150%",
        duration: 1.5,
        rotation: 30
    })
    //^BOXES
    //BOX__0
    gsap.to('#BOX0', {
        rotation: 60,
        duration: 1,
        x: "-210%",
        scrollTrigger: {
            trigger: "#BOX0",
            toggleActions: "restart pause reverse restart",
            scrub: false
        }
    })
    //BOX__1
    gsap.to('#BOX1', {
        rotation: 180,
        duration: 1,
        x: "200%",
        scrollTrigger: {
            trigger: "#BOX1",
            toggleActions: "restart pause reverse restart",
            scrub: false
        }
    })
    //BOX__2
    gsap.to("#BOX2", {
        rotation: 120,
        duration: 1,
        x: "-240%",
        scrollTrigger: {
            trigger: "#BOX2",
            toggleActions: "restart pause reverse restart",
            scrub: false
        }
    })
    //& TEXT
    gsap.to("#NEWTEXT", {
        duration: 3,
        text: "WELCOME TO GSAP",
        ease: "none",
        toggleActions: "restart pause reverse restart"
    })
    const TEXT = document.getElementById("#TEXT")
    const STATE = Flip.getState(TEXT)

});