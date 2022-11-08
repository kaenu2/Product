import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


//menu-pop-up
const menuIcon = document.querySelector('.menu__icon');

if (menuIcon) {
	const menuBodu = document.querySelector('.menu__body');
	menuIcon.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		menuBodu.classList.toggle('_active')
		menuIcon.classList.toggle('_active')
	});
}

//pop-up sig-in
const menuButton = document.querySelector('.menu__button');
const popUpSigIn = document.querySelector('.pop-up-sign');
const popUpSigInForm = document.querySelector('.pop-up-sign__form');

if (menuButton) {
	menuButton.addEventListener('click', function (e) {
		document.body.classList.add('_lock')
		popUpSigIn.classList.toggle('_active')
		popUpSigInForm.classList.toggle('_active')
	});
}

const popUpIcon = document.querySelector('.pop-up-sign__icon');
if (popUpIcon) {
	popUpIcon.addEventListener('click', function (e) {
		document.body.classList.remove('_lock')
		popUpSigIn.classList.remove('_active')
		popUpSigInForm.classList.remove('_active')
	});
}


//pop-up-sign-up

const singUpBtnCkick = document.querySelector('.sing-up-btn-ckick');
const popUpSignUp = document.querySelector('.pop-up-sign-up');

if (singUpBtnCkick) {
	singUpBtnCkick.addEventListener('click', function (e) {
		document.body.classList.add('_lock')
		popUpSignUp.classList.toggle('_active')
	});
}

const popUpSignUpIcon = document.querySelector('.pop-up-sign-up__icon');

if (popUpSignUpIcon) {
	popUpSignUpIcon.addEventListener('click', function (e) {
		document.body.classList.remove('_lock');
		popUpSignUp.classList.remove('_active');
	});
}




//theme
const toggleTheme = document.querySelector('.header__theme');
let el = document.documentElement;

function theme() {
	toggleTheme.addEventListener('click', () => {
		if (el.hasAttribute('data-theme')) {
			el.removeAttribute('data-theme')
			localStorage.removeItem('theme')
		} else {
			el.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark')
		}
	});
	if (localStorage.getItem('theme') !== null) {
		el.setAttribute('data-theme', 'dark')
	}
}

theme();




const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	initialSlide: 1,
	autoplay: {
		delay: 9000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});