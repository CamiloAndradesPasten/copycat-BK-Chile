"use strict"
const buttonNav = document.querySelector('.buttonNav');
const menuDesp = document.querySelector('.divMenuDesp');
const menuActive = document.querySelector('.itemMenu');
const aCatActive = document.querySelector('.aCatActive');
aCatActive.style.color = '#fff';
menuActive.style.background = 'var(--textVerMas)';

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
btnMenu()