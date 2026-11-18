// Small helpers used in a few places

// true if the person asked their computer to reduce animations
export var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade things in when you scroll to them
export function fadeInOnScroll() {
  var items = document.querySelectorAll('.fade');
  for (var i = 0; i < items.length; i++) {
    var top = items[i].getBoundingClientRect().top;
    if (top < window.innerHeight - 40) {
      items[i].classList.add('show');
    }
  }
}
