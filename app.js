// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Cambia el texto de un elemento HTML según el selector
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  if (elementoHTML) elementoHTML.innerHTML = texto;
}

// Título y subtítulo iniciales
asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');

// Lista de amigos
let amigos = [];

// Agrega un amigo si el nombre ingresado es válido
function agregarAmigo() {
  let input = document.getElementById('amigo');
  let nuevoAmigo = (input?.value || '').trim();

  // Solo letras (incluye acentos y ñ) y espacios intermedios
  let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  if (!nuevoAmigo || !regexNombre.test(nuevoAmigo)) {
    alert('Por favor ingrese un nombre válido (solo letras y espacios).');
    if (input) { input.value = ''; input.focus(); }
    return;
  }

  // Duplicados sin distinguir mayúsculas/minúsculas
  if (amigos.some(nombre => nombre.toLowerCase() === nuevoAmigo.toLowerCase())) {
    alert(`El nombre "${nuevoAmigo}" ya fue introducido.`);
    if (input) { input.value = ''; input.focus(); }
    return;
  }

  amigos.push(nuevoAmigo);
  limpiarCaja();
  mostrarLista();
}

// Muestra la lista de amigos en pantalla
function mostrarLista() {
  let listaHTML = document.getElementById('listaAmigos');
  if (!listaHTML) return;

  listaHTML.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    listaHTML.appendChild(li);
  }
}

// Limpia el campo de entrada
function limpiarCaja() {
  let input = document.getElementById('amigo');
  if (input) { input.value = ''; input.focus(); }
}

// Sortea un amigo aleatorio y lo muestra
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    return;
  }

  let indiceAmigoAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indiceAmigoAleatorio];

  mostrarAmigo(amigoSecreto);
  reiniciarJuego(); // Limpia la lista (dejas visible el resultado)
}

// Muestra el amigo secreto sorteado
function mostrarAmigo(amigo) {
  let resultado = document.getElementById('resultado');
  if (resultado) {
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigo}</strong>`;
  }
}

// Reinicia el “juego”: limpia la lista de amigos (deja el resultado)
function reiniciarJuego() {
  amigos = [];
  mostrarLista();
  limpiarCaja();
}

// Alias para coincidir con HTML que use reiniciarLista()
function reiniciarLista() {
  reiniciarJuego();
}





