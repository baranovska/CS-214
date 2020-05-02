// #######
jQuery(document).ready(function($) {

	let scroll = $(this).scrollTop();
	(scroll > 50) ? $('#header').addClass('bg-brown') : $('#header').removeClass('bg-brown');

	$(window).on('scroll', function(e){
		scroll = $(this).scrollTop();
		(scroll > 50) ? $('#header').addClass('bg-brown') : $('#header').removeClass('bg-brown');
	})
// #######

// #######
	$("#burger").click(function(){
		$(this).toggleClass('active');
		$("#navigation").toggleClass('active');
	});

	$('.modal_form_trigger').click(function(e){
		e.preventDefault();
		$("#modal_form").addClass('active');
	})

	$('#modal_close').click(function(e){
		e.preventDefault();
		$("#modal_form").removeClass('active');
	})


	function switchBtnTheme() {
		let switchBtn = $('.switch_theme');
		ligth = true;

		const lightPalette = {
			color1: '#4a3600',
			color2: '#fffbf0',
			color3: '#f6f6f6'
		}

		const darkPalette = {
			color1: '#B8860B',
			color2: '#bc9321',
			color3: '#4a3600'
		}

		$(window).scroll(function (event) {
			if(window.pageYOffset > 750 && window.innerWidth >= 950){
				switchBtn.css('top', 150);
			}
			else switchBtn.css('top', -150);
		});

		switchBtn.click(function (event) {
			if(ligth){
				$(this).css('background-color', darkPalette.color1);
				getElements(darkPalette);
				switchBtn.html('light')

				$(this).hover(function(){
					$(this).css("background-color", lightPalette.color1);
				}, function(){
					$(this).css("background-color", darkPalette.color1);
				});

			}
			else{
				$(this).css('background-color', lightPalette.color1);
				getElements(lightPalette);
				switchBtn.html('dark')
				$(this).hover(function(){
					$(this).css("background-color", darkPalette.color1
					);
				}, function(){
					$(this).css("background-color", lightPalette.color1);
				});

			}
			ligth = !ligth;
		})

		function getElements(pallet) {
			$('.bg-light-brown').css('background-color', pallet.color2);
			$('.bg_white').css('background-color', pallet.color3);
			$(`.text-brown`).css('color', pallet.color3);
			$(`.bg-brown`).css('background-color', pallet.color1);
			$(`.text-brown`).css('color', pallet.color1);
		}
	}
	switchBtnTheme();
});
// #######

// #######
function validateEmail(email) {
	var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return pattern .test(email);
}
function validate() {
	var $result = $("#result");
	var email = $("#email").val();
	$result.text("");

	if (validateEmail(email)) {
		$result.text("Thanks for registration.");
	} else {
		$result.text("Not correct e-mail.");

	}
	return false;
}
$("#validate").bind("click", validate);
// #######


// #######
const password = document.querySelector('input[type="text"]');

password.addEventListener('focus', (event) => {
	event.target.style.background = 'yellow';
});

password.addEventListener('blur', (event) => {
	event.target.style.background = '';
});
// #######

// #######
let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("mouseenter", function( event ) {
	event.target.style.color = "purple";

	setTimeout(function() {
		event.target.style.color = "";
	}, 5000);
}, false);


changeColor.addEventListener("mouseover", function( event ) {
	event.target.style.color = "pink";

	setTimeout(function() {
		event.target.style.color = "";
	}, 5000);
}, false);
// #######

// #######
const selectElement = document.querySelector('.hair');

selectElement.addEventListener('change', (event) => {
	const result = document.querySelector('.result');
	result.textContent = `Your choice - ${event.target.value}`;
});
// #######

























