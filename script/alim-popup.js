function popupOpenClose(popup) {
	
	
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	
	$(popup).show();

	
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=openPopup1]").on("click", function() {
		popupOpenClose($(".popup1"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup2]").on("click", function() {
		popupOpenClose($(".popup2"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup3]").on("click", function() {
		popupOpenClose($(".popup3"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup4]").on("click", function() {
		popupOpenClose($(".popup4"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup5]").on("click", function() {
		popupOpenClose($(".popup5"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup6]").on("click", function() {
		popupOpenClose($(".popup6"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup7]").on("click", function() {
		popupOpenClose($(".popup7"));
	});
});

$(document).ready(function () {
	$("[data-js=openPopup8]").on("click", function() {
		popupOpenClose($(".popup8"));
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