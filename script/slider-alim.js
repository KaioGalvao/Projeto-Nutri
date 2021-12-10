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

const secondMobileNavbar = new MobileNavbar(
	".second-mobile-menu",
	".mobile-nav-list",
	".mobile-nav-list-item"
);

secondMobileNavbar.init();
/*
class SecondMobileNavbar {
	constructor(secondMenuMobile, linkItemsNav, navLinksSecond) {
	  this.secondMenuMobile = document.querySelector(secondMenuMobile);
	  this.linkItemsNav = document.querySelector(linkItemsNav);
	  this.navLinksSecond = document.querySelectorAll(navLinksSecond);
	  this.activeClass = "active";
  
	  this.handleClick = this.handleClick.bind(this);
	}
  
	animateLinks() {
	  this.navLinksSecond.forEach((link, index) => {
		link.style.animation
		  ? (link.style.animation = "")
		  : (link.style.animation = `navLinksSecondFade 0.5s ease forwards ${
			  index / 7 + 0.3
			}s`);
	  });
	}
  
	handleClick() {
	  this.linkItemsNav.classList.toggle(this.activeClass);
	  this.secondMenuMobile.classList.toggle(this.activeClass);
	  this.animateLinks();
	}
  
	addClickEvent() {
	  this.secondMenuMobile.addEventListener("click", this.handleClick);
	}
  
	init() {
	  if (this.secondMenuMobile) {
		this.addClickEvent();
	  }
	  return this;
	}
}
  
const secondMobileNavbar = new SecondMobileNavbar(
	".second-menu-mobile",
	".link-items-nav",
	".link-items-nav li",
);
secondMobileNavbar.init();
*/





