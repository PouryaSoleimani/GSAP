
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

    // ^ LOGOS
    //? SETTING ANIMATION TO ONE ELEMENT ( TRANSFORM X and Y )
    // gsap.to("#LOGO", {
    //     duration: 2,
    //     x: "350%",
    //     backgroundColor: "#4b4a4a",
    //     borderRadius: "20px",
    //     border: "3px solid white",
    //     ease: "back" // elastic , bounce 
    // })
    // gsap.to("#LOGO2", {
    //     duration: 2,
    //     x: "-350%",
    //     backgroundColor: "#4b4a4a",
    //     borderRadius: "20px",
    //     border: "3px solid white",
    //     ease: "back" // elastic , bounce 
    // })
    //? SETTING ANIMATION TO MULTIPLE ELEMENTS AT THE SAMETIME
    gsap.set("#LOGO,#LOGO2", {
        transformOrigin: "50% 50%",
        duration: 2,
    })
    // gsap.to("#LOGO , #LOGO2", { // THE {GSAP.TO} METHOD STARTS FROM THE DEFAULT FORM  AND ENDS TO OUR CUSTOMIZATION
    //     duration: 2,
    //     x: 250,
    //     rotation: 360,
    //     ease: "bounce"
    // })
    //* GSAP.FROM
    gsap.from("#LOGO", {
        duration: 3,
        x: "200vw",
        rotation: 360,
        ease: "back"
    })
    gsap.from("#LOGO2", {
        duration: 3,
        x: "-200vw",
        rotation: 360,
        ease: "back"
    })
    // gsap.from("#LOGO , #LOGO2", { // THE {GSAP.FROM} METHOD STARTS FROM OUR CUSTOMIZATION AND ENDS TO THE DEFAULT FORM
    //     duration: 2,
    //     x: 250,
    //     rotation: 360,
    //     ease: "bounce"
    // })
    gsap.from(".circle", {
        duration: 1,
        y: () => Math.random() * 400 - 200,
        stagger: .1,
        ease: "back"
    })
})