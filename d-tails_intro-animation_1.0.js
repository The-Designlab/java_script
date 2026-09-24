var tl = gsap.timeline({ defaults: { ease: 'Expo.easeInOut', duration: .45 } })

//logo stagger to last 1.2 seconds in total//

/*tl.from(".logo-d", {
    y: "100%",
  }),

  tl.from(".logo-o", {
    y: "100%",
  }, "-=0.3"),

  tl.from(".logo-v", {
    y: "100%",
  }, "-=0.3"),

  tl.from(".logo-e", {
    y: "100%",
  }, "-=0.3"),*/

//move just the left side of the logo//

tl.from(".dove-left", {
    y: "100%",
    autoAlpha: 0
  }),

  tl.from(".tails-right", {
    y: "100%",
    autoAlpha: 0
  }, "-=0.3"),

  /*tl.from(".logo-t", {
    y: "100%",
  }, "-=0.3"),

  tl.from(".logo-a", {
    y: "100%",
  }, "-=0.3"),

  tl.from(".logo-i", {
    y: "100%",
  }, "-=0.3"),

  tl.from(".logo-l", {
    y: "100%",
  }, "-=0.3"),

  tl.from(".logo-s", {
    y: "100%",
  }, "-=0.3"),

  tl.to(".produce-text", {
    opacity: 0,
  }),*/

  //dovetails logo to split left and right//
  //strapline text to disappear underneath//
  //center image container to grow from center at the same time as the logo split//
  //logo split to grow from 0% left and right//
  //4 images to cycle through in center box//

  tl.to(".image-anim_wrapper", {
    delay: .5,
    duration: .4,
    height: 300,
    width: 480,
  }, "-=0.1"),

  tl.from('#intro-image_2', {
    delay: .2,
    duration: .4,
    ease: 'power4.in',
    opacity: 0,
    //width: 400,
    width: '100%'
  }),

  tl.from('#intro-image_3', {
    delay: .2,
    duration: .4,
    ease: 'power4.in',
    opacity: 0,
    //width: 440,
    width: '100%'
  }),

  tl.from('#intro-image_4', {
    delay: .2,
    duration: .4,
    ease: 'power4.in',
    opacity: 0,
    //width: 480,
    width: '100%'
  }),

  //big image box image to fall down to fill screen//

  tl.to(".image-grow_wrapper", {
    delay: .3,
    duration: .7,
    ease: 'power4.in',
    height: "100vh",
    width: "100vw",
  }),

  //copy to appear at bottom of screen//

  tl.from(".hero-headline", {
    y: "120%",
    autoAlpha: 0
  }),

  tl.from(".hero-subhead", {
    /*delay: .5,*/
    y: "100%",
    duration: .5,
    autoAlpha: 0
  }, "-=0.1"),

  //navigation furniture and text to appear after image fills screen//
  //blue bar to appear behind navigation//

  tl.from(".nav_wrapper", {
    y: "-100%",
    ease: 'power4.out',
    duration: .3,
    autoAlpha: 0,
  }, "-=1"),

  tl.from('#workshop', {
    y: "100%",
    duration: .3,
  }, "-=0.3"),

  tl.from('#interior-joinery', {
    y: "100%",
    duration: .3,
  }, "-=0.2"),

  tl.from('#exterior-joinery', {
    y: "100%",
    duration: .3,
  }, "-=0.2"),

  tl.from('#contact-us', {
    y: "100%",
    duration: .3,
  }, "-=0.2")
