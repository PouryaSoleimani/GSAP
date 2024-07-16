
//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin)
    //^ SQUARES
    gsap.to("#SQUARE__1", {
        x: "110%",
        y: "-170%",
        duration: 1.5,
        rotation : 140
    })
    gsap.to("#SQUARE__2", {
        x: "60%",
        y: "-20%",
        duration: 1.5,
        rotation : 65
    })
    gsap.to("#SQUARE__3", {
        x: "50%",
        y: "-190%",
        duration: 1.7,
        rotation : 100
    })
    gsap.to("#SQUARE__4", {
        x: "70%",
        y: "-15%",
        duration: 1.5,
        rotation : 240
    })
    gsap.to("#SQUARE__5", {
        x: "-20%",
        y: "-200%",
        duration: 1.5,
        rotation : 120
    })
    gsap.to("#SQUARE__6", {
        x: "-10%",
        y: "-150%",
        duration: 1.5,
        rotation : 30
    })
    gsap.to("#SQUARE__7", {
        x: "60%",
        y: "-10%",
        duration: 1.5,
        rotation : 140
    })
    //^BOXES
    //BOX__0
    gsap.to('#BOX0', {
        rotation: 360,
        duration: 1,
        x: -1200,
        scrollTrigger: {
            trigger: "#BOX0",
            toggleActions: "restart pause reverse restart",
            scrub: true
        }
    })
    //BOX__1
    gsap.to('#BOX1', {
        rotation: 360,
        duration: 1,
        x: 1220,
        scrollTrigger: {
            trigger: "#BOX1",
            toggleActions: "restart pause reverse restart",
            scrub: true
        }
    })
    //BOX__2
    gsap.to("#BOX2", {
        rotation: 360,
        duration: 1,
        x: -1350,
        scrollTrigger: {
            trigger: "#BOX2",
            toggleActions: "restart pause reverse restart",
            scrub: true
        }
    })
    //& TEXT
    gsap.to("#NEWTEXT", {
        duration: 3,
        text: "WELCOME TO GSAP",
        ease: "none",
        toggleActions: "restart pause reverse restart"
    })


});