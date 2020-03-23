$(document).ready(function() {
$('.button[filter="wb"]').click(function(){
	if($(this).attr('val')=='off'){
		$('.button[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
		$('.filter > div').hide(300);
		$('.button[filter]').removeClass('focused');
		$(this).addClass('focused');
		$('.filter > div[filter="wb"]').show(300);
	}
});

$('.button[filter="ub"]').click(function(){
	if($(this).attr('val')=='off'){
		$('.button[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
		$('.filter > div').hide(300);
		$('.button[filter]').removeClass('focused');
		$(this).addClass('focused');
		$('.filter > div[filter="ub"]').show(300);
	}
});

$('.button[filter="moc"]').click(function(){
	if($(this).attr('val')=='off'){
		$('.button[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
		$('.filter > div').hide(300);
		$('.button[filter]').removeClass('focused');
		$(this).addClass('focused');
		$('.filter > div[filter="moc"]').show(300);
	}
});

$('.button[filter="all"]').click(function(){
	if($(this).attr('val')=='off'){
		$('.button[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
		$('.button[filter]').removeClass('focused');
		$(this).addClass('focused');
		$('.filter > div').show(300);
	}
});
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  dotsClass: 'dots-style',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
	  }
  },{
	  breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
	  }
	  
    }]
});

$('ul.menu a[href^="#"').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({
	scrollTop: $(target).offset().top
},500);
$('ul.menu a[href^="#"').css({'color':'#212121'});
$(this).css({'color':'#004bee'});
return false;

});

$('.menu-icon').click(function(){
	$('nav').slideToggle(500);
	$('ul.menu').css({
		'display':'flex', 'flex-direction':'column'
	})
	if($('.menu-icon').html()=='<i class="fas fa-bars"></i>') {
		$(this).html('<i class="fas fa-times"></i>')
	} else {
		$(this).html('<i class="fas fa-bars"></i>')
	}
})

$(window).scroll(function () {
	if ($(this).scrollTop() !=0)
		$('#toTop').fadeIn();
	else
		$('#toTop').fadeOut();
});
$('#toTop').click(function () {
	$('body, html').animate({
		scrollTop: 0
	}, 800);
});
})