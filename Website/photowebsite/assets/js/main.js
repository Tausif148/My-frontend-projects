$(window).scroll(function(){
  // sticky header on scroll script
  if(this.scrollY > 20){
      $('.header').addClass("sticky");
  }else{
      $('.header').removeClass("sticky");
  }


// toggle btn
if(this.scrollY > 20){
  $('.navbar').addClass("navbar-light");
}else{
  $('.navbar').removeClass("navbar-light");
}
  
});





$('.portfolio-item').isotope({
  // options
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

$('.portfolio-menu ul li').click(function () {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
      filter: selector
  });
  return false;

});
