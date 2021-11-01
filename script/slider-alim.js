//slider alimentos
$(".custom-carousel").owlCarousel({
	autoWidth: true,
	loop: true
  });
  $(document).ready(function () {
	$(".custom-carousel .item").click(function () {
	  $(".custom-carousel .item").not($(this)).removeClass("active");
	  $(this).toggleClass("active");
	});
});

//Descer com animação suavizada
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


//Botão ir para o top suavizado
$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

$(document).ready(function (e) {
	$('.ExibirLightBox').hover(function (e) {
		$(".lightbox").css("display", "block");
	}
)
});
