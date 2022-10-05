const preloader = document.querySelector('#preloader');
const barraNavegador = document.querySelector('#mainNav');
const titulo = document.querySelector('#mainNav .container a');
const primerContenedor = document.querySelector('.box-shadow-full');
const cardBlog = document.querySelectorAll('.card-blog');
const tituloAnimado = document.querySelector('.text-slider-items');
const tituloPagina = document.querySelector('.intro-title');
const imagenes = document.querySelector('.lightbox');

console.log(imagenes);

document.title = 'Michael Tovar';
document.body.style.backgroundColor = '#323232';
document.body.style.color = '#ffffff';
preloader.remove();
barraNavegador.style.backgroundColor = 'black';
titulo.textContent = 'Michael Tovar';
cardBlog.forEach(card => card.style.backgroundColor = '#464646');
tituloPagina.textContent = 'Michael Tovar'
tituloAnimado.textContent = 'Ingeniero Electrónico, Desarrollador de software, Desarrollador web, Salesforce';

(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();
  
/* $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
})  */

  //Animacion de barra de navegación
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  }); 


   $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  }); 

	// Star ScrollTop NPI
	 $('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	}); 

	// animación de los contadores
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	// Animación (scroll lento) al presionar un elemento de la navbar
	 $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	}); 

	// Se cierra 
	// Closes responsive menu when a scroll trigger link is clicked
	 $('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// se modifican los valores en la barra de navegacion según donde se este ubicado (scrollSpy)
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	// End Scrolling nav //

	 // Animaciones de la barra de navegacion (superior) Navbar Menu Reduce //
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	}); 

	// animacion de escribir-borrar (inicio)
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	} 

	// Aparece en la segunda tranparencia  unas imagnes
	 // Testimonials owl //
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	}); 
})(jQuery);
