//Variables que voy a utilizar
var y = -2;
var i = -1;
var txt = "";
var preguntaCssEspanol = "";
var botonCssEspanol1 = "";
var botonCssEspanol2 = "";
var botonCssEspanol3 = "";
var botonCssEspanol4 = "";
var puntuacionCssEspanol = 0;
var puntuacionCssEspanolX = "";

//Siguientes preguntas
function siguientePreguntaCssEspanol() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("question")[i];
    preguntaCssEspanol = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("preguntaCssEspanol").innerHTML = preguntaCssEspanol;
    botonCssEspanol1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("botonCssEspanol1").innerHTML = botonCssEspanol1;
    botonCssEspanol2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("botonCssEspanol2").innerHTML = botonCssEspanol2;
    botonCssEspanol3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("botonCssEspanol3").innerHTML = botonCssEspanol3;
    botonCssEspanol4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("botonCssEspanol4").innerHTML = botonCssEspanol4;
  }
  xhttp.open("GET", "../xml/testCssEspanol.xml");
  xhttp.send();
}

//Comprobacion de la respuesta del usuario.
function puntuacionCssEspanol1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacionCssEspanolX == "yes") {
      puntuacionCssEspanol++
      document.getElementById('puntosCssEspanol').innerHTML = puntuacionCssEspanol
    }

  }
  xhttp.open("GET", "../xml/testCssEspanol.xml");
  xhttp.send();
}

function puntuacionCssEspanol2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacionCssEspanolX == "yes") {
      puntuacionCssEspanol++
      document.getElementById('puntosCssEspanol').innerHTML = puntuacionCssEspanol
    }

  }
  xhttp.open("GET", "../xml/testCssEspanol.xml");
  xhttp.send();
}
function puntuacionCssEspanol3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacionCssEspanolX == "yes") {
      puntuacionCssEspanol++
      document.getElementById('puntosCssEspanol').innerHTML = puntuacionCssEspanol
    }

  }
  xhttp.open("GET", "../xml/testCssEspanol.xml");
  xhttp.send();
}
function puntuacionCssEspanol4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacionCssEspanolX == "yes") {
      puntuacionCssEspanol++
      document.getElementById('puntosCssEspanol').innerHTML = puntuacionCssEspanol
    }

  }
  xhttp.open("GET", "../xml/testCssEspanol.xml");
  xhttp.send();
}