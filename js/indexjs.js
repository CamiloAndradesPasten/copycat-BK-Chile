"use strict"

const buttonNav = document.querySelector('.buttonNav');
const menuDesp = document.querySelector('.divMenuDesp');
const buttonLeft = document.querySelector('.buttonArrowLeft');
const buttonRight = document.querySelector('.buttonArrowRight');
const itemsCarrusel = document.querySelector('.divCarruselImg');
const ulCarrusel = document.querySelector('.ulCarrusel');
const carrusel = [].slice.call(itemsCarrusel.children);
const puntosUl = [].slice.call(ulCarrusel.children);
/* agregar los puntosli */

function btnMenu() {
	buttonNav.addEventListener('click',()=>{
		
		buttonNav.classList.toggle('active');
		if (buttonNav.className.includes('active')) {
			
			menuDesp.style.display='block';
			
		}
		else{
			menuDesp.style.display='none';
			
		}
	})
}

function carruselAll() {
	let con = 1;
	buttonRight.addEventListener('click', ()=>{

	if (con <= 5) {
		let operacion = con * -100;
		itemsCarrusel.style.transform = `translateX(${ operacion }%)`;
		puntosUl[con-1].classList.toggle('liActive');
		puntosUl[con].classList.toggle('liActive');
		con = con + 1;
	}
	else{
		
		puntosUl[5].classList.toggle('liActive');
		con = 1;
		puntosUl[0].classList.toggle('liActive');
		itemsCarrusel.style.transform = `translateX(0%)`;
	}
	console.log(con)
	})
	buttonLeft.addEventListener('click', ()=>{
		
	if (con==1) {
		
		let operacion = -500;
		itemsCarrusel.style.transform = `translateX(${ operacion }%)`;
		puntosUl[5].classList.toggle('liActive');
		puntosUl[0].classList.toggle('liActive');
		con = 6;
	}
	
	else if (con == 6) {
		con = 4;
		let operacion = con * -100;
		
		itemsCarrusel.style.transform = `translateX(${ operacion }%)`;
		puntosUl[5].classList.toggle('liActive');
		puntosUl[con].classList.toggle('liActive');
		con = 5;
		
	}

	else{
		con= con-2
		let operacion = con * -100;
		itemsCarrusel.style.transform = `translateX(${ operacion }%)`;
		puntosUl[con+1].classList.toggle('liActive');
		puntosUl[con].classList.toggle('liActive');
		con= con+1;
		
	}
	
	})

}


btnMenu()
carruselAll();








