//querySelector: reemplaza a todos los getelemts

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');
const contenedor = document.querySelector('#contenedor');
 
const form   = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn    = document.querySelector('#btnCalcular');

h1.innerHTML = "Calculo de Suma:";
p.innerText = "Esperando Resultado....";

/*Atributos*/
h1.getAttribute('pantalla');
h1.setAttribute('pantalla','rota');

/*Clases*/
h1.classList.add('rojo');
h1.classList.add('rojo');
h1.classList.toggle('rojo');

input.value = "456";

/*Creacion de elemetnos */

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

contenedor.append(img);


/*addeventlistener */
form.addEventListener('submit', btnClick);

/*Eventos */
function btnClick(event) {
    event.preventDefault();
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    p.innerHTML = "El resultado es:" + resultado;
}

