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
