// mouse enter and leave tween (image rollover)//

//for just a single item that triggers all items with the same calss use this//

/*
const item = document.querySelector(".team-member_wrapper")

const tween = gsap.to(('#image-default'),
{
  visibility: 'hidden',
  paused: true
})

item.addEventListener("mouseenter", function () {
  tween.play()
})

item.addEventListener("mouseleave", function () {
  tween.reverse();
})
*/

//for multiple items to act independant of one another use this//
const items = document.querySelectorAll(".team-member_wrapper");
items.forEach(function (item, index) {

  const tween = gsap.to(item.querySelector('#image-default'), {
    visibility: 'hidden',
    paused: true
  });

  item.addEventListener("mouseenter", function () {
    tween.play();
  });

  item.addEventListener("mouseleave", function () {
    tween.reverse();
  });
});
