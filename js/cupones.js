
const buttonNav = document.querySelector('.buttonNav');
const menuDesp = document.querySelector('.divMenuDesp');
const menuActive = document.querySelector('.itemMenu');
const aCatActive = document.querySelector('.aCatActive');
const btnCupones = document.querySelectorAll('.btnCupon');
const divCupon= document.querySelector('.divCupon');
aCatActive.style.color = '#fff';
menuActive.style.background = 'var(--textVerMas)';

const listCupones = {
	1: item = {
		id:1,
		title:'2 Cheeseburger + Papas Fritas Grandes',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO…',
		img:'../img/promo5000queso.jpeg'
	},
	2:item={
		title:'2 Cheeseburger s',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO…',
		img:'../img/promo5000.jpeg'
	},
	3:item={
		title:'2 Cheeseburger + Papas Fritas Grandes',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO…',
		img:'../img/promo3100.jpeg'
	}
};

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

function cupones() {
		
		for (let i = 0; i < btnCupones.length; i++) {
			
			btnCupones[i].addEventListener('click',()=>{
				for (let e = 0; e < btnCupones.length; e++) {
					btnCupones[e].classList.remove('cuponActive')
					
				}
				
				pageCupon(btnCupones[i].id);
				console.log(btnCupones[i].classList.toggle('cuponActive'))

			})
			
			
		}
	
}

function pageCupon(id) {
	divCupon.innerHTML=` 
	<div class="divImgCupon" >
		<div class="contentImgCupon">
			<div class="imgCupon" style="background-image:url(${listCupones[id]['img']});"></div>
		</div>
	</div>


	<h2>${listCupones[id]['title']}</h2>
	<p><span>${listCupones[id]['span']}</span></p>
	<button class="codigoBtn">Codigo</button>
	

`;

}



cupones()
btnMenu()