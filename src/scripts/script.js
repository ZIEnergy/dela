$('.main').fullpage({
  verticalCentered: false,
  animateAnchor: true,
  navigation: true,
  navigationTooltips: ['Первый шаг', 'Как работает', 'Преимущества', 'Что заказывают?', 'Категории', 'Узнать больше'],
  onLeave: function(index, nextIndex, direction) {
    if(index == 1 && direction =='down'){
      $('#fp-nav').fadeIn('slow');
    }
    if(nextIndex == 1){
      $('#fp-nav').hide();
    }
  }
});