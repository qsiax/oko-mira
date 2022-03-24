import './styles/all.scss'
//import * as $ from 'jquery'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
//import { TweenMax } from "gsap/all"
import Swiper from 'swiper/bundle'
import 'swiper/css'
import './components/buttonAnimation'
//import './components/jquery'

gsap.registerPlugin(ScrollTrigger);


let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {

	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	var drawLength = pathLength * scrollPercentage;

	path.style.strokeDashoffset = pathLength - drawLength;

})

const blogSlider = new Swiper('.blog__block-slider', {
	slidesPerView: 1,
	spaceBetween: 60,
	speed: 600,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 30,
		slideShadows: false,
	},
	loop: true,
	mousewheel: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.blog__arrowNext',
		prevEl: '.blog__arrowPrev',
	}
});

let t1 = gsap.timeline({ paused: true });

t1.to('.line-one', {
	x: 0,
	duration: .5
})
t1.to('.line-two', {
	x: 0,
	duration: .5
})
t1.to('.line-three', {
	x: 0,
	duration: .5
})
t1.to('.line-four', {
	x: 0,
	duration: .5
})
t1.to('.line-five', {
	x: 0,
	duration: .5
})

document.querySelector('.header__menu').addEventListener('click', () => {
	t1.play();
	const menu = document.querySelector('.header__menu-plus');

	menu.classList.toggle('active')
})
