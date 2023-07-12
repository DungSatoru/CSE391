window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 240) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});