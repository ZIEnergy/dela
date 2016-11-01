$('.modal-link').magnificPopup({
  type: 'inline',
  // other options
});

$('.form-popup__button').click(function() {
  $.magnificPopup.close();
});