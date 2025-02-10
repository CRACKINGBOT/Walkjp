document.getElementById('si').addEventListener('click', function() {
  // Aparecer el mensaje y hacer volar los corazones
  document.getElementById('mensaje').innerText = '¡Sabía que aceptarías! ❤️';
  lanzarCorazones();
});

document.getElementById('no').addEventListener('mouseover', function() {
  // Mover el botón "No" a una posición aleatoria en la pantalla
  let x = Math.random() * (window.innerWidth - this.offsetWidth);
  let y = Math.random() * (window.innerHeight - this.offsetHeight);
  this.style.left = x + 'px';
  this.style.top = y + 'px';
});

function lanzarCorazones() {
  let corazon = document.createElement('div');
  corazon.innerText = '❤️';
  corazon.style.position = 'absolute';
  corazon.style.fontSize = '30px';
  corazon.style.animation = 'volar 2s forwards';
  corazon.style.left = (Math.random() * 100) + '%';
  corazon.style.top = '80%';
  document.getElementById('corazoncitos').appendChild(corazon);

  setTimeout(function() {
    corazon.remove();
  }, 2000);
}
