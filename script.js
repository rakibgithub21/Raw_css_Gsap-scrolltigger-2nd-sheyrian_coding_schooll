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

gsap.from('#page2 h1', {
    opacity: 0,
    x:500,
    duration: 2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: 'body',
        start: 'top 50%',
        markers:true,
}
})
gsap.from('#page2 h2', {
    opacity: 0,
    x:-500,
    duration: 2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: 'body',
        start: 'top 50%',
        markers:true,
}
})