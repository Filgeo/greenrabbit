$('.carousel').carousel({ numVisible: 3, indicators: true });
$('.sidenav').sidenav();
$('.slider').slider({ height: 500, indicators: true });
$('.parallax').parallax();
$('.scrollspy').scrollSpy({scrollOffset: -10});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });