//Javascript reloj


// window.onload = updateClock;

var totalTime = 120;

function updateClock() {
  document.getElementById('cuentaatras').innerHTML = totalTime;
  if (totalTime == 0) {
    alert('Tiempo finalizado.');
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}