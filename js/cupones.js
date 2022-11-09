
const buttonNav = document.querySelector('.buttonNav');
const menuDesp = document.querySelector('.divMenuDesp');
const menuActive = document.querySelector('.itemMenu');
const aCatActive = document.querySelector('.aCatActive');
const btnCupones = document.querySelectorAll('.btnCupon');
const divCupon= document.querySelector('.divCupon');
const divBtnCupones = document.querySelector('.divBtnCupones');
const btnCode=document.querySelector('.codigoBtn');
const imgCupon = document.querySelector('.imgCupon');
const h2Cupon = document.querySelector('.h2Cupon');
const spanCupon = document.querySelector('.spanCupon');
const h2CuponHeader = document.querySelector('.h2HeaderCupon');
const btnCuponExit = document.querySelector('.btnCuponExit');
const divCuponResponsive = document.querySelector('.divCuponResponsive');
const imgCuponResponsive = document.querySelector('.imgCuponResponsive');
const h2HeaderCuponResponsive = document.querySelector('.h2HeaderCuponResponsive');
const spanCuponResponsive = document.querySelector('.spanCuponResponsive');
const btnCodeResponsive = document.querySelector('.codigoBtnResponsive');
const h2CuponResponsive = document.querySelector('.h2CuponResponsive');
const btnCuponExitResponsive =document.querySelector('.btnCuponExitResponsive');





aCatActive.style.color = '#fff';
menuActive.style.background = 'var(--textVerMas)';

const listCupones = {
	1: item = {
		id:1,
		title:'Combo Cheeseburger',
		span:'Combo cheeseburger simple con papas y bebida pequeñas',
		img:'../img/promo3100.jpeg'
	},
	2:item={
		id:2,
		title:'Combo Whopper Jr.',
		span:'Combo Whopper Jr. con papas y bebida pequeñas',
		img:'../img/imgCupones/whopperJr1200.jpeg'
	},
	3:item={
		id:3,
		title:'Combo Hamburguesa Clásica',
		span:'Combo Hamburguesa Clásica con papas y bebida pequeñas.',
		img:'../img/imgCupones/clasica1200.jpeg'
	},
	4:item={
		id:4,
		title:'Combo Pollo Clásico',
		span:'Combo Pollo Clásico con papas y bebida pequeñas.',
		img:'../img/imgCupones/polloClasic1200.jpeg'
	},
	5:item={
		id:5,
		title:'Combo Cheeseburger Doble',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/dobleCheeseburger1200.jpeg'
	},
	6:item={
		id:6,
		title:'Combo Whopper Jr. Doble',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/dobleWhopper1200.jpeg'
	},
	7:item={
		id:7,
		title:'Combo Stacker Mozzarella',
		span:'Tu Stacker de siempre, ahora con 3 crocantes bastones de queso Mozzarella, imposible resistirse! tu combo viene acompañado de papas fritas y bebida medianas',
		img:'../img/imgCupones/stackerMozzarella1200.jpeg'
	},
	8:item={
		id:8,
		title:'Combo Stacker Mozzarella Doble',
		span:'Tu Stacker Doble de siempre, ahora con 3 crocantes bastones de queso Mozzarella, imposible resistirse! tu combo viene acompañado de papas fritas y bebida medianas',
		img:'../img/imgCupones/dobleStackerMuzzarella1200.jpeg'
	},
	9:item={
		id:9,
		title:'Combo Whopper Mozzarella',
		span:'Tu Whopper de siempre, ahora con 3 crocantes bastones de queso Mozzarella, imposible resistirse! tu combo viene acompañado de papas fritas y bebida medianas',
		img:'../img/imgCupones/whopperMuzzarella1200.jpeg'
	},
	10:item={
		id:10,
		title:'Combo Whopper Mozzarella Doble',
		span:'Tu Whopper Doble de siempre, ahora con 3 crocantes bastones de queso Mozzarella, imposible resistirse! tu combo viene acompañado de papas fritas y bebida medianas',
		img:'../img/imgCupones/dobleWhopperMuzzarella1200.jpeg'
	},
	11:item={
		id:11,
		title:'Mozzarella Sticks',
		span:'¡VUELVEN POR TIEMPO LIMITADO!',
		img:'../img/imgCupones/muzzarellaSticks1200.jpeg'
	},
	12:item={
		id:12,
		title:'2 Hamburguesa Deluxe + 1 papa y bebida pequeña',
		span:'Cupón incluye una papa frita y bebida pequeña',
		img:'../img/imgCupones/2Deluxe1200.jpeg'
	},
	13:item={
		id:13,
		title:'Family Bundle - 2 Combos Whopper + 2 Combos Whopper Jr.',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/familyBundle1200.jpeg'
	},
	14:item={
		id:14,
		title:'3 Combo Whopper Medianos',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/3WhopperMediano1200.jpeg'
	},
	15:item={
		id:15,
		title:'2 Combo Stacker Doble',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/2StackerDoble1200.jpeg'
	},
	16:item={
		id:16,
		title:'2 Combo Whopper Medianos',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/2WhopperMedianos1200.jpeg'
	},
	17:item={
		id:17,
		title:'2 Combo Rodeo King',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/2RodeoKing1200.jpeg'
	},
	18:item={
		id:18,
		title:'2 Combo Hamburguesa Doble Queso Tocino',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/2dobleQuesoTocino1200.jpeg'
	},
	19:item={
		id:19,
		title:'2 Combo Whopper Vegetal',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES. *Mayonesa contiene productos de origen animal',
		img:'../img/imgCupones/2WhopperVegetal1200.jpeg'
	},
	20:item={
		id:20,
		title:'Combo Whopper Mediano',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/whopperMediano1200.jpeg'
	},
	21:item={
		id:21,
		title:'Combo King de Pollo Club',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/kingPollo1200.jpeg'
	},
	22:item={
		id:22,
		title:'Bowl Papas Supremas + Bowl Papas Fritas',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/bowlPapas1200.jpeg'
	},
	23:item={
		id:23,
		title:`Pie de Chocolate Hershey's`,
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/pieChocolate1200.jpeg'
	},
	24:item={
		id:24,
		title:'Cono Relleno Manjar',
		span:'TM & © 2022 BURGER KING CORPORATION. SE UTILIZA BAJO LICENCIA. TODOS LOS DERECHOS RESERVADOS. IMAGENES REFERENCIALES.',
		img:'../img/imgCupones/cono1200.jpeg'
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
					btnCupones[e].classList.remove('cuponActive');
					
				}
				
				pageCupon(btnCupones[i].id);
				console.log(btnCupones[i].classList.toggle('cuponActive'));
				
			})
			
			
		}
	
}

function pageCupon(id) {
	if (window.innerWidth <= 960) {
		
		divCuponResponsive.style.display='flex';
		imgCuponResponsive.style.backgroundImage = `url(${listCupones[id]['img']})`;
		h2HeaderCuponResponsive.textContent = listCupones[id]['title'];
		spanCuponResponsive.textContent =listCupones[id]['span'];
		btnCodeResponsive.id = listCupones[id]['id']; 
		h2CuponResponsive.textContent = listCupones[id]['title'];


		
	}
	if (window.innerWidth > 960) {
		divCuponResponsive.style.display='none';
		imgCupon.style.backgroundImage = `url(${listCupones[id]['img']})`;
		h2Cupon.textContent = listCupones[id]['title'];
		spanCupon.textContent =listCupones[id]['span'];
		btnCode.id = listCupones[id]['id']; 
	}

	
	
	

}

function cuponCode() {
	btnCode.addEventListener('click',()=>{
		alert(btnCode.id)
	})
}

function cuponCodeResponsive() {
	btnCodeResponsive.addEventListener('click',()=>{
		alert(btnCodeResponsive.id)
	})

	btnCuponExitResponsive.addEventListener('click',()=>{
		divCuponResponsive.style.display= 'none';
	})

}


cuponCodeResponsive()
cuponCode()
cupones();
btnMenu();
