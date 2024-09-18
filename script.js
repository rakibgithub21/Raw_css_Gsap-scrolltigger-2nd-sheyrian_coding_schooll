gsap.from('#page1 #box', {
    scale: 0,
    duration: 2,
    rotate:360,
})

// gsap.from('#page2 #box', {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     // scrollTrigger:"#page2 #box"
//     //here #page2 #box is target which container i want to add scroll trigger
//     // just normal scroll trigger
//     scrollTrigger: {
//         // complex and best
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: 'top 60%',
        
        
//     }
// })

// another

// gsap.from('#page2 h1', {
//     opacity: 0,
//     x:500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: 'body',
//         start: 'top 50%',
//         markers:true,
// }
// })
// gsap.from('#page2 h2', {
//     opacity: 0,
//     x:-500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: 'body',
//         start: 'top 50%',
//         markers:true,
// }
// })



//another practice

// gsap.from('#page3 #box', {
//     scale: 0,
//     opacity: 0,
//     duration: 2,
//     rotate:740,
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         scroller: 'body',
//         start: 'top 60%',
//         end:'top 30%',
//         markers: true,
//         scrub: 5,  //scrub is allowd (true or false and 1 - 5)
//         pin:true // explore what is pin
//     }
// })





// another practice


gsap.to('#page2 h1', {
    transform: "translateX(-350%)",
    scrollTrigger: {
        //alway if use pin trigger only parent like #page2 not #page2 h1

        // trigger: "#page2 h1",
        trigger:"#page2",//this is right way for pin
        scroller: "body",
        markers: true,
        start: 'top 0%',
        end: 'top -150%',
        scrub:2,
        pin: true,
    }
})