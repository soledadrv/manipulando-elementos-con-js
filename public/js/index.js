// seleccionar los elementos a utilizar
const main = document.querySelector('main');
const h2 = document.querySelector('.subtitulo');
const a = document.getElementById('a');
const p = document.querySelectorAll('p');
const body = document.querySelector('body');

// indicar al usuario que ingrese su nombre
const name = window.prompt('Ingrese su nombre');

// si el usuario ingresó su nombre dar la bienvenida con nonmbre, de lo contrario dar la bienvenida como invitado
if(name) {
    h2.innerText += name
} else {
    h2.innerText += 'invitado'
}

// hacer que el texto de bienvenida se cambie a mayúsculas
h2.style.textTransform = 'uppercase';

// hacer que el link al listado de películas cambie a color rojo
a.style.color = '#E51B3E';

// preguntar al usuario si quiere cambiar el fondo
const response = window.confirm('Desea cambiar el fondo?');

// en caso de que la respuesta sea afirmativa, agregar al body la clase 'fondo'
if(response) {
    body.classList.add('fondo')
}

// hacer que los párrafos tengan una clase u otra dependiendo si es par o impar
for (let i = 0; i < p.length; i++) {
    if(i % 2 === 0) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}

// hacer visible el main
main.style.display = 'block';