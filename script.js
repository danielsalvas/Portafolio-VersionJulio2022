//Función que aplica el estilo a la opción seleccionada en la barra de Menú Responsive

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = '';
    opciones[1].className = '';
    opciones[2].className = '';
    opciones[3].className = '';
    opciones[4].className = '';
    link.className = "seleccionado";

    var x = document.getElementById('nav');
    x.className = '';
}

//Función que muestra el menú responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className===''){
        x.className = 'responsive';
    } else {
        x.className = '';
    }
}

//Detección del scrolling para aplicar animación a barra de herramientas y conocimientos

window.onscroll = () => {
    efectoConocimientos()
};

function efectoConocimientos() {
    var conocimientos = document.getElementById('knowledge');
    var distancia = window.innerHeight - conocimientos.getBoundingClientRect().top;
    if (distancia >= 300) {
        document.getElementById('vsc').classList.add('barra-progreso1')
        document.getElementById('git').classList.add('barra-progreso2')
        document.getElementById('github').classList.add('barra-progreso3')
        document.getElementById('mbs').classList.add('barra-progreso4')
        document.getElementById('ps').classList.add('barra-progreso5')
        document.getElementById('next').classList.add('barra-progreso6')
        document.getElementById('html').classList.add('barra-progreso7')
        document.getElementById('css').classList.add('barra-progreso8')
        document.getElementById('tailwind').classList.add('barra-progreso9')
        document.getElementById('js').classList.add('barra-progreso10')
        document.getElementById('react').classList.add('barra-progreso11')
        document.getElementById('native').classList.add('barra-progreso12')
    }
}

//Función MixiItUp PORTFOLIO

let mixerPortfolio = mixitup('.portfolio__container', {
    selectors: {
        target: '.proyecto'
    },
    "animation": {
        "duration": 300,
        "nudge": false,
        "reverseOut": false,
        "effects": "fade scale(0.01)"
    }
});


//Link filtro activo en Portfolio

const linkWork = document.querySelectorAll('.work__item')

function activeWork(params) {
    linkWork.forEach( l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))


