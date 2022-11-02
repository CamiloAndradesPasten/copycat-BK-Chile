const valores = window.location.search;
const url = new URLSearchParams(valores);
const valor = url.get('id')
const divPage = document.querySelector('.divItemCombo')



const listaItem = {

    /* carnes */
     1: item1 = {
        id:1,
        name:'London Grill',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-BK-web_400x400_London-Grill.png',
        desc:'The King Selection, con 200 gramos de carne a la parrilla en suave Pan de Papa. London Grill combina la deliciosa salsa stacker, con cebolla caramelizada, tocino y queso Cheddar.'
    },
    2: item1 = {
        id:2,
        name:'American Grill',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-BK-web_400x400_American-Grill.png',
        desc:'The King Selection, con 200 gramos de carne a la parrilla en suave Pan de Papa. American grill nos deleita con la más fresca lechuga Lollo, tomate, crujiente Tocino, Queso cheddar, cebolla caramelizada y un toque de mayonesa ahumada? mmmm una obra de arte.'
    },
    3: item1 = {
        id:3,
        name:'King Germano',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_King-Germano.png',
        desc:'La nueva preparación del King, jugosa carne a la parrilla, acompañada con queso, tocino crujiente, cebolla caramelizada, pepinillos, kétchup y mostaza'
    },
    4: item1 = {
        id:4,
        name:'King Italiano con Queso',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_King-italiano-con-queso.png',
        desc:'Una mezcla de sabores únicos con el nuevo King italiano con queso! Dos sabrosas carnes a la parrilla acompañada de palta, tomate, mayonesa y queso.'
    },
    5: item1 = {
        id:5,
        name:'Whopper',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Whopper-Doble.png',
        desc:'La carne a la parrilla de BURGER KING® despierta el hambre, por eso creamos esta opción de WHOPPER® con doble carne de WHOPPER®. Dedicada a sus fanáticos'
    },
    6: item1 = {
        id:6,
        name:'Whopper Extreme',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Whopper-Extreme-Doble.png',
        desc:'Sabores intensos y un tamaño extremo con Doble Carne. Una variante de WHOPPER® con Queso Cheddar y Tocino que lleva al placer.'
    },
    7: item1 = {
        id:7,
        name:'Rodeo King',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Rodeo-King-Doble.png',
        desc:'El clásico sabor de la Rodeo King llega en partida doble. Aros de cebolla, queso cheddar y la rica salsa BBQ. Y lo más importante: doble carne Whopper a la parrilla.'
    },
    8: item1 = {
        id:8,
        name:'Steakhouse',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Steakhouse.png',
        desc:'Disfruta de gran sabor que te da una carne mucho más grande hecha a la parrilla! 100% carne de vacuno, acompañada de queso, cebolla caramelizada, vegetales frescos, salsa BBQ, mayonesa envueltos en un delicioso y crujiente pan.'
    },
    9: item1 = {
        id:9,
        name:'Stacker',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Stacker-Doble.png',
        desc:'El mítico sabor de la Stacker llega con doble porción de carne a la parrilla, crujiente tocino, queso cheddar y por supuesto, la sabrosa salsa de Stacker. ¡Descúbrela!'
    },
    10: item1 = {
        id:10,
        name:'Hamburguesa Doble Queso Tocino',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Hamburguesa-doble-queso-tocino.png',
        desc:'Una de nuestras clásicas y más pedidas, una doble hamburguesa, con doble queso y crujiente tocino que vas a querer volver a comer una y otra vez.'
    },
    11: item1 = {
        id:11,
        name:'Hamburguesa Doble Italiana',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Hamburguesa-doble-italiana.png',
        desc:'Si te gusta lo tradicional, no te puedes perder una clásica, rica y gran hamburguesa con doble carne, tomate, mayonesa y por supuesto palta Hass..'
    },
    12: item1 = {
        id:12,
        name:'Bac&oacute;n King',
        type:'Combos de Carne',
        anchor:'combosCarne',
        img:'../img/menu/Carnes/Fotos-sitio-BK_400px_Bacon-King-Doble.png',
        desc:'BACON KING™ preparado con 2 jugosas carnes a la parrilla, cubiertas con queso americano derretido y coronado por trozos de Bacon, todo perfectamente acomodado entre dos suaves panes con kétchup y mayonesa.'
    },

    /* plant Based */ 
    13: item1 = {
        id:13,
        name:'King Italiano Vegetal',
        type:'Plant Based',
        anchor:'plantBased',
        img:'../img/menu/plantBased/Fotos-BK-web_400x400_King-Vegetal-Italiano.png',
        desc:'King Italiano Vegetal, todo el sabor del pollo pero hecha íntegramente con vegetales, acompañado de tomates frescos, rica palta y mayonesa.'
    },
    14: item1 = {
        id:14,
        name:'King Vegetal Clásico',
        type:'Plant based',
        anchor:'plantBased',
        img:'../img/menu/plantBased/Fotos-BK-web_400x400_King-Vegetal.png',
        desc:'King Vegetal, todo el sabor del pollo pero hecha íntegramente con vegetales.'
    },
    15: item1 = {
        id:15,
        name:'Nuggets',
        type:'Plant based',
        anchor:'plantBased',
        img:'../img/menu/plantBased/Fotos-BK-web_400x400_Nuggets-Vegetal.png',
        desc:'8 Sabrosos Nuggets Vegetal, todo el sabor del pollo pero hecha íntegramente con vegetales.'
    },
    16: item1 = {
        id:16,
        name:'King Rodeo BBQ Vegetal',
        type:'Plant based',
        anchor:'plantBased',
        img:'../img/menu/plantBased/Fotos-sitio-BK_400px_King-Rodeo-BBQ-Vegetal.png',
        desc:'100% Whopper, 0% carne, esta vez acompañado de crujientes aros de cebolla empanizados, salsa BBQ y queso cheddar'
    },
    17: item1 = {
        id:17,
        name:'Whopper Vegetal',
        type:'Plant based',
        anchor:'plantBased',
        img:'../img/menu/plantBased/Fotos-sitio-BK_400px_Whopper-Vegetal.png',
        desc:'El sándwich emblemático de BURGER KING®, en una hamburguesa 100% Whopper, 0% carne, hecha completamente de fuentes vegetales.'
    },

    /* Pollos */
    18: item1 = {
        id:18,
        name:'Bacon BBQ Crispy Chicken',
        type:'Combos de Pollo',
        anchor:'combosPollo',
        img:'../img/menu/pollos/Fotos-productos_400x300_Crispy-Chicken.png',
        desc:'Lo nuevo de King Selection, delicioso Crispy Chicken en pan de papa, acompañado de salsa BBQ, cebolla caramelizada, queso cheddar y crocante tocino.'
    },
    19: item1 = {
        id:19,
        name:'Smoke Mayo Crispy Chicken',
        type:'Combo de Carne',
        anchor:'combosCarne',
        img:'../img/menu/pollos/Fotos-productos_400x300_Smoke-Mayo-Crispy-Chicken.png',
        desc:'Lo nuevo de King Selection, delicioso Crispy Chicken en pan de papa, acompañado de lechuga crespa, cebolla caramelizada, jugosos pepinillos y nuestra famosa Smoke Mayo.'
    },
    20: item1 = {
        id:20,
        name:'King de Pollo Rodeo',
        type:'Combos de Pollo',
        anchor:'combosPollo',
        img:'../img/menu/pollos/Fotos-BK-web_400x400_King-de-Pollo-Rodeo.png',
        desc:'Crujiente carne de pollo apanada a la perfección, Aros de cebolla, queso cheddar y la rica salsa BBQ.'
    },
    21: item1 = {
        id:21,
        name:'King de Pollo Stacker',
        type:'Combos de Pollo',
        anchor:'combosPollo',
        img:'../img/menu/pollos/Fotos-BK-web_400x400_King-de-Pollo-Stacker.png',
        desc:'Para los amantes de la salsa Stacker: Crujiente carne de pollo apanada a la perfección, Queso cheddar y Cebolla, todo decorado con los más ricos pepinillos. Por supuesto, con un toque de salsa Stacker.'
    },
    22: item1 = {
        id:22,
        name:'King de Pollo Italiano',
        type:'Combos de Pollo',
        anchor:'combosPollo',
        img:'../img/menu/pollos/Fotos-BK-web_400x400_King-de-Pollo-Italiano.png',
        desc:'Crujiente carne de pollo apanada a la perfección en pan con semillas de sésamo, acompañado de frescos tomates, rica palta y mayonesa.'
    },
    23: item1 = {
        id:23,
        name:'King de Pollo Club',
        type:'Combos de Pollo',
        anchor:'combosPollo',
        img:'../img/menu/pollos/Fotos-sitio-BK_400px_King-de-Pollo-Club.png',
        desc:'Crujiente carne de pollo apanada a la perfección. Sensación única combinada con verduras frescas, irresistible queso cheddar, mayonesa y crujiente Bacon.'
    },
    24: item1 = {
        id:24,
        name:'Nuggets x 8',
        type:'Combos de Pollo',
        anchor:'combosPollo',
        img:'../img/menu/pollos/Fotos-sitio-BK_400px_Nuggets-x-8.png',
        desc:'Sabrosos Nuggets de Pollo, jugosos por dentro y crocantes por fuera. Son perfectos para combinar con cualquiera de nuestras salsas.'
    },

    /* king jr */
    25: item1 = {
        id:27,
        name:'Cajita Nuggets',
        type:'King Jr',
        anchor:'kingJr',
        img:'../img/menu/kingJr/Fotos-APP_BK_400x300_Cajita-King-Nuggets.png',
        desc:'4 Deliciosos nuggets de pollo.'
    },

    26: item1 = {
        id:26,
        name:'Hamburguesa Simple',
        type:'King Jr',
        anchor:'kingJr',
        img:'../img/menu/kingJr/HAMBURGUESA-SOLA-1.png',
        desc:'Una hamburguesa simple, que no necesita acompañamientos para disfrutar de su gran sabor.'
    },
    27: item1 = {
        id:27,
        name:'Hamburguesa Palta',
        type:'King Jr',
        anchor:'kingJr',
        img:'../img/menu/kingJr/HAMBURGUESA-palta-1.pngg',
        desc:'Una hamburguesa a la parrilla que se combina con el intenso sabor a la palta.'
    },

    /* snack */
    28: item1 = {
        id:28,
        name:'Chicken Fries',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-productos_400x300_Chicken-Fries.png',
        desc:'Exquisitos 9 Chicken Fries. 100% Pechuga de pollo apanada.'
    },
    29: item1 = {
        id:29,
        name:'Bowl Papas',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-sitio-BK_400px_Bowl-papas.png',
        desc:'Nuestra clásicas y crujientes papas fritas al mejor estilo de Burger King, para compartir.. ¿o no?'
    },
    30: item1 = {
        id:30,
        name:'Bowl Papas + Aros',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-sitio-BK_400px_Bowl-papas-aros.png',
        desc:'Nuestra clásicas y crujientes papas fritas al mejor estilo de Burger King acompañadas de 16 crujientes aros de cebolla, para compartir.. ¿o no?'
    },
    31: item1 = {
        id:31,
        name:'Bowl Papas + Nuggets',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-sitio-BK_400px_Bowl-papas-nuggets.png',
        desc:'Nuestra clásicas y crujientes papas fritas al mejor estilo de Burger King acompañados de 6 sabrosos nuggets, para compartir.. ¿o no?'
    },
    32: item1 = {
        id:32,
        name:'Bowl Papas Supremas',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-sitio-BK_400px_Bowl-papas-supremas.png',
        desc:'¡Tus papas fritas favoritas! Ahora con una sabrosa salsa de queso cheddar, y crocante tocino, para compartir… ¿o no?'
    },
    33: item1 = {
        id:33,
        name:'Aros de Cebollas',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-sitio-BK_400px_Aros-cebolla-x-12.png',
        desc:'12 aros de cebollas deliciosos, crujientes y dorados que no podrás parar de comerlos.'
    },
    34: item1 = {
        id:34,
        name:'Papas Fritas',
        type:'Snack',
        anchor:'snackCont',
        img:'../img/menu/Snack/Fotos-sitio-BK_400px_Papas-fritas-medianas.png',
        desc:'Nuestra clásicas y crujientes papas fritas al mejor estilo de Burger King'
    },
    /* Postres */
    35: item1 = {
        id:35,
        name:'Pie de Chocolate',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-sitio-BK_400px_Pie-Chocolate.png',
        desc:"Delicioso pie HERSHEY'S® con helado de chocolate, ideal para empezar un día lleno de energías, con un antojo dulce."
    },
    36: item1 = {
        id:36,
        name:'Pie de Manzana',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-sitio-BK_400px_Pie-de-Manzana.png',
        desc:'Nuestro pie de Manzana se sirve calientito, recién salido de la cocina. Crujiente hojaldre frito relleno de manzana y canela.'
    },
    37: item1 = {
        id:37,
        name:'King Fusi&oacute;n Choco Chips Chocolate',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-APP_BK_400x300_King-Fusion-Chips-Chocolate.png',
        desc:"Delicioso helado de vainilla, acompañado de chips de chocolate y cubierto con de salsa de Chocolate Hershey's"
    },
    38: item1 = {
        id:38,
        name:'King Fusi&oacute;n Choco Chips Manjar',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-APP_BK_400x300_King-Fusion-Chips-Manjar.png',
        desc:'Delicioso helado de vainilla, acompañado de chips de chocolate y cubierto con de salsa de Manjar.'
    },
    39: item1 = {
        id:39,
        name:'King Fusi&oacute;n Peanuts Chocolate',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-APP_BK_400x300_King-Fusion-Peanuts-Chocolate.png',
        desc:"Delicioso helado de vainilla, acompañado de trocitos de crocante maní y cubierto con de salsa de Chocolate Hershey's"
    },
    40: item1 = {
        id:40,
        name:'King Fusi&oacute;n Peanuts Manjar',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-APP_BK_400x300_King-Fusion-Peanuts-Manjar.png',
        desc:'Delicioso helado de vainilla, acompañado de trocitos de crocante maní y cubierto con de salsa de Manjar.'
    },
    41: item1 = {
        id:41,
        name:"Sundae Chocolate Hershey's",
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-sitio-BK_400px_Sundae-Chocolate.png',
        desc:"Delicioso helado de vainilla cubierto de salsa de chocolate Hershey's."
    },
    42: item1 = {
        id:42,
        name:'Sundae Manjar',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-sitio-BK_400px_Sundae-Manjar.png',
        desc:'Delicioso helado de vainilla cubierto de salsa de manjar.'
    },
    43: item1 = {
        id:43,
        name:"Cono de Helado Relleno Chocolate Hershey's",
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-sitio-BK_400px_Cono-relleno-Chocolate.png',
        desc:''
    },
    44: item1 = {
        id:44,
        name:'Cono de Helado Relleno Manjar',
        type:'Postres',
        anchor:'idPostres',
        img:'../img/menu/postres/Fotos-sitio-BK_400px_Cono-relleno-Manjar.png',
        desc:''
    }

    
};

function page (id){
    divPage.innerHTML=
    
    `<div class="divRuta">
        <ul class="ulRuta">
            <li class="liRuta"><a href="../index.html" class="aRuta">
                Home
            </a></li>
            <li class="liRuta">/</li>
            <li class="liRuta"><a href="./menu.html" class="aRuta">
                Menu
            </a></li>
            <li class="liRuta">/</li>
            <li class="liRuta"><a href="./menu.html#${listaItem[id]['anchor']}" class="aRuta">
                ${listaItem[id]['type']}
            </a></li>
            <li class="liRuta">/</li>
            <li class="liRuta"><a href="#" class="aRuta aRutaActual">
                ${listaItem[id]['name']}
            </a></li>
        </ul>
    </div>

    <div class='pageCombo'>
        <img src=${listaItem[id]['img']} alt="" class="imgCombo" >
        <h2 class='titleCombo'>${listaItem[id]['name']}</h2>
        <p>${listaItem[id]['desc']}</p>
    </div>

    






`






;
}

page(valor)

