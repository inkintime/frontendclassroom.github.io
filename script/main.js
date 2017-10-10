$( document ).ready(function() {

  //Change between pages on portfolio
  $('.portfolioNav > li').on('click',function(){
    if(!$(this).hasClass('current')){
      $('.portfolioNav > li').removeClass('current');
      $(this).addClass('current');
      $('.portfolioDisplay > div')
        .stop(true)
        .css('opacity','1')
        .animate({'opacity':'0'},300, function(){
              $(this).css({'order':Math.floor(Math.random()*4)+1,'top':'60px'});
        })
        .animate({'opacity':'1','top':'0px'},300);
      //$(this).addClass('current');
    }
  });

  //Hide placeholder text when on focus
  $('.yourName')
    .on('focus', function(){
      $(this).attr('placeholder','');
    })
    .on('focusout', function(){
      $(this).attr('placeholder','Your Name*');
  });

  $('.yourEmail')
    .on('focus', function(){
      $(this).attr('placeholder','');
    })
    .on('focusout', function(){
      $(this).attr('placeholder','Your Email*');
  });

  $('.yourMessage')
    .on('focus', function(){
      $(this).attr('placeholder','');
    })
    .on('focusout', function(){
      $(this).attr('placeholder','Your Message*');
  });

  $('textarea').bind('keypress', function(e) {
    if ((e.keyCode || e.which) == 13) {
      $(this).parents('form').submit();
      return false;
    }
  });

  //Show articles when scrolled to
  scrolled();
  $(window).scroll(scrolled);

  function scrolled(){
    $('article').each(function(i){
      var scroll = $(document).scrollTop(), offset = $(this).offset().top;
      if(offset < (scroll+ $(window).height()/2)){
        $(this).children().animate({'opacity':'1','top':'0px'},600);
        console.log('this article is '+ $(this).index() + ' in the order');
      }
    });
    $('article:last-of-type').css('opacity','1');
  }

});
