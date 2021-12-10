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

class MobileNavbar {
	constructor(mobileMenu, navList, navLinks) {
	  this.mobileMenu = document.querySelector(mobileMenu);
	  this.navList = document.querySelector(navList);
	  this.navLinks = document.querySelectorAll(navLinks);
	  this.activeClass = "active";
  
	  this.handleClick = this.handleClick.bind(this);
	}
  
	animateLinks() {
	  this.navLinks.forEach((link, index) => {
		link.style.animation
		  ? (link.style.animation = "")
		  : (link.style.animation = `navLinkFade 0.5s ease forwards ${
			  index / 7 + 0.3
			}s`);
	  });
	}
  
	handleClick() {
	  this.navList.classList.toggle(this.activeClass);
	  this.mobileMenu.classList.toggle(this.activeClass);
	  this.animateLinks();
	}
  
	addClickEvent() {
	  this.mobileMenu.addEventListener("click", this.handleClick);
	}
  
	init() {
	  if (this.mobileMenu) {
		this.addClickEvent();
	  }
	  return this;
	}
  }
  
const mobileNavbar = new MobileNavbar(
".mobile-menu",
".nav-list",
".nav-list li",
);
mobileNavbar.init();