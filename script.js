document.getElementById('si').addEventListener('click', function() {
    // Aparecer el mensaje y hacer volar los corazones
    document.getElementById('mensaje').innerText = '¡Sabía que aceptarías! ❤️';
    lanzarCorazones();
  });
  
  document.getElementById('no').addEventListener('click', function() {
    // Hacer que el botón "Sí" crezca cada vez más
    let siButton = document.getElementById('si');
    let currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = (currentSize + 5) + 'px';
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
  