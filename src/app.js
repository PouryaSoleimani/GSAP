//^ GSAP JAVASCRIPT FILE ================================================================================================================================
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin)
    //^ SQUARES
    gsap.to("#SQUARE__1", { x: "10%", y: "-190%", duration: 1.5, rotation: 140 })
    gsap.to("#SQUARE__2", { x: "-30%", y: "-10%", duration: 1.5, rotation: 65 })
    gsap.to("#SQUARE__3", { x: "20%", y: "-240%", duration: 1.7, rotation: 100 })
    gsap.to("#SQUARE__4", { x: "90%", y: "-15%", duration: 1.5, rotation: 240 })
    gsap.to("#SQUARE__5", { x: "20%", y: "-200%", duration: 1.5, rotation: 120 })
    gsap.to("#SQUARE__6", { x: "40%", y: "-150%", duration: 1.5, rotation: 30 })
    //^BOXES

    gsap.from('#BOX0', { rotation: 60, duration: 1, x: "-210%", scrollTrigger: { trigger: "#BOX0", toggleActions: "restart pause reverse restart", scrub: true } })
    gsap.from('#BOX1', { rotation: 180, duration: 1, x: "200%", scrollTrigger: { trigger: "#BOX1", toggleActions: "restart pause reverse restart", scrub: true } })
    gsap.from("#BOX2", { rotation: 120, duration: 1, x: "-240%", scrollTrigger: { trigger: "#BOX2", toggleActions: "restart pause reverse restart", scrub: true } })
    gsap.to("#NEWTEXT", { duration: 3, text: "WELCOME TO GSAP", ease: "none", toggleActions: "restart pause reverse restart" })

    // ^ LOGOS =================================================================================================================================
    //~ SETTING ANIMATION TO ONE ELEMENT ( TRANSFORM X and Y ) || GSAP.TO & GSAP.FROM
    // gsap.to("#LOGO", { duration: 2, x: "350%", backgroundColor: "#4b4a4a", borderRadius: "20px", border: "3px solid white", ease: "back" })
    //~ SETTING ANIMATION TO MULTIPLE ELEMENTS AT THE SAMETIME
    // gsap.set("#LOGO,#LOGO2", { transformOrigin: "50% 50%", duration: 2, })
    // gsap.to("#LOGO , #LOGO2", { x: 250, rotation: 360, ease: "bounce" })
    //* GSAP.FROM
    gsap.from("#LOGO", { duration: 3, x: "200vw", rotation: 360, ease: "back" })
    gsap.from("#LOGO2", { duration: 3, x: "-200vw", rotation: 360, ease: "back" })
    // gsap.from("#LOGO , #LOGO2", { duration: 2, x: 250, rotation: 360, ease: "bounce" })
    gsap.from(".circle", {
        duration: 1,
        y: "40vh",
        stagger: .1, // STAGGER METHOD IS USEFUL WHEN USING AN ANIMATION FOR MULTIPLE ELEMENTS , THIS ELEMENT ADD DELAY BETWEEN ELEMENTS
        ease: "back"
    })
    const tween = gsap.from(".square", { // GIVING A GSAP METHOD A NAME {TWEEN} , SO WE CAN PLAY AND PAUSE AND ... WITH BUTTONS 
        duration: 2,
        x: "200vw",
        stagger: .4, //USE WHEN WE HAVE AN ANIMATION ON MULTIPLE ELEMENTS
        ease: "expo.inOut"
    })

    function playHandler() { tween.play() }
    function pauseHandler() { tween.pause() }
    document.getElementById("PLAY_BUTTON").onclick = playHandler
    document.getElementById("PAUSE_BUTTON").onclick = pauseHandler

    // *GSAP.TIMELINE
    var tl = gsap.timeline({ yoyo: true }) //USING TIMELINE CAUSES OUR ELEMENT TO PERFORM ANIMATIONS AFTER EACHOTHER AND NOT AT THE SAMETIME

    tl.from(".circletl", { duration: 1, x: "-200vw", ease: "back", })
    tl.from(".squaretl", { duration: 1, x: "200vw", ease: "back" })
})

//* NEW TUTORIAL =======================================================================================================================================================================    
//^ BASICS
gsap.to("#box1", {
    duration: 1.5,
    backgroundColor: "#FABB14",
    x: 1770,
    delay: 1,
    ease: "none",
    repeat: -1, // -1 MAKES THE ELEMENT TO PERFORM THE ANIMATION INFINITELY
    yoyo: true //  GOING BACK AND FORWARD AND REPEAT THE ANIMATION BACKWARDLY
})

gsap.from(".newText", {
    duration: 1,
    delay: .5,
    y: 50,
    opacity: .5,
    stagger: .3,
})

//^ TIMELINE
// 1 - TO USE TIMELINES IN {GSAP} , WE MUST FIRST CREATE A TIMELINE AND SAVE IT IN A VARIABLE
var tl = gsap.timeline()

// 2 - THEN WE SHOULD USE THE VARIABLE {tl} INSTEAD OF GSAP : GSAP.TO ==> TL.TO
tl.to("#T1", {
    duration: 1.5,
    x: 1650,
    ease: "power1.inOut",
    backgroundColor: "#FABB14",
})
tl.to("#T2", {
    duration: 1.5,
    x: 1650,
    ease: "power1.inOut",
    backgroundColor: "#9e0000"
})
tl.to("#T3", {
    duration: 1.5,
    x: 1650,
    ease: "power1.inOut",
    backgroundColor: "#62ff24"
})

//^ ANOTHER TIMELINE EXAMPLE =====================================================================================================================================
let TL = gsap.timeline()

TL.from("#nav", {
    duration: .7,
    y: -30,
    opacity: 0,
})
TL.from(".navitem", {
    duration: .7,
    y: -30,
    opacity: 0,
    stagger: .2
})
TL.from("#GSAPTEXT", {
    duration: 2,
    scale: .8,
    opacity: 0,
    ease: "power1.inOut"
})


//^ SCROLL TRIGGER ================================================================================================================================================
gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 1.5,
    opacity: 0,
    rotate: 180,
})
//& PINK BOX ======================================================================================================================================================
gsap.from("#page2 #box", {
    duration: 2.5,
    scale: 0,
    rotate: 720,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        start: "top 160%",
        end: "top 40%",
        scrub: true,
    }
})
gsap.from("#page3 #box", {
    duration: 1.5,
    scale: 0,
    rotate: 720,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        start: "top 150%",
        end: "top 50%",
        scrub: true,
    }
})
// * TEXT ==========================================================================================================================================================
gsap.from("#page4 #text_page_4", {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#text_page_4",
        scroller: "body",
        start: "top 150%",
        end: "top 30%",
        scrub: true
    }
})

// ? HORIZONTAL ==========================================================================================================================================================
gsap.to('#HORIZONTAL__TEXT', {
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true
    }
})