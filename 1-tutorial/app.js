// Scroll Magic: init controller
let controller = new ScrollMagic.Controller();

// Tween => Section_2
new ScrollMagic.Scene({
  triggerElement: "#section_2",
})
  // animate color and top header in relation to scroll position
  .setTween("#bg img", {
    minWidth: "1200px",
    bottom: "5%",
    left: "70%",
    opacity: 0.25,
  })
  .addTo(controller);

// Tween => Section_3
new ScrollMagic.Scene({
  triggerElement: "#section_3",
})
  // animate color and top header in relation to scroll position
  .setTween("#bg img", {
    left: "20%",
  })
  .addTo(controller);

// Tween => Section_4
new ScrollMagic.Scene({
  triggerElement: "#section_4",
})
  // animate color and top header in relation to scroll position
  .setTween("#bg img", {
    opacity: "0",
  })
  .addTo(controller);
