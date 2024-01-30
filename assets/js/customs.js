jQuery(document).ready(function () {
  // menu
  $('.sidebar-nav-icon').on('click', function () {
    $('#sidebar-menu').toggleClass('show');
    $('#mobile-menu-overlay').toggleClass('show');
  });
  $('#sidebar-menu .close-menu').on('click', function () {
    $('#sidebar-menu').removeClass('show');
    $('#mobile-menu-overlay').removeClass('show');
  });
  $('.check-list-quantity li').on('click', function () {
    $(this).toggleClass('selected');
  });
  if ($('.slider-for').length > 0) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
  }
  if ($('.slider-nav').length > 0) {
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      slide: 'div'
    });
  }
  //sales-countdown
  if ($('#sales-countdown').length > 0) {
    let x = setInterval(function () {
      // Find the distance between now and the count down date
      let distance = parseInt($('#sales-countdown span').attr('data-time'));

      // Time calculations for days, hours, minutes and seconds
      let minutes = Math.floor(distance / 60);
      let seconds = Math.floor(distance % 60);

      // Display the result in the element with id="demo"
      $('#sales-countdown span').html(`${minutes < 10 ? '0' + minutes : minutes}m ${seconds < 10 ? '0' + seconds : seconds}s`)

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        $('#sales-countdown span').html("EXPIRED");
      }

      $('#sales-countdown span').attr('data-time', distance - 1)
    }, 1000);
  }
});
(function () {

  window.inputNumber = function (el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function () {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if (!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if (!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));