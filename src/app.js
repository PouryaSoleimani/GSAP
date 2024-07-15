//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    //! BOX1 
    //^ BOX2
    gsap.to("#BOX2", {
        rotation: 360,
        duration: 5,
        scrollTrigger: {
            trigger: "#BOX2",
            toggleActions: "restart pause reverse pause",
            scrub: true,
        }
    })
    //& TEXT
    gsap.to("#NEWTEXT", {
        duration: 3,
        text: "WELCOME TO GSAP EVERYBODY !!!!",
        ease: "none",
        toggleActions: "restart pause reverse pause"
    })


});