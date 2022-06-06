//Variables que voy a utilizar
var y = -2;
var i = -1;
var txt = "";
var preguntaCssIngles = "";
var botonCssIngles1 = "";
var botonCssIngles2 = "";
var botonCssIngles3 = "";
var botonCssIngles4 = "";
var puntuacionCssIngles = 0;
var puntuacionCssInglesX = "";

//Siguientes preguntas
function siguientePreguntaCssIngles() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("question")[i];
    preguntaCssIngles = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("preguntaCssIngles").innerHTML = preguntaCssIngles;
    botonCssIngles1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("botonCssIngles1").innerHTML = botonCssIngles1;
    botonCssIngles2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("botonCssIngles2").innerHTML = botonCssIngles2;
    botonCssIngles3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("botonCssIngles3").innerHTML = botonCssIngles3;
    botonCssIngles4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("botonCssIngles4").innerHTML = botonCssIngles4;
  }
  xhttp.open("GET", "../xml/testCssIngles.xml");
  xhttp.send();
}

//Comprobacion de la respuesta del usuario.
function puntuacionCssIngles1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacionCssInglesX == "yes") {
      puntuacionCssIngles++
      document.getElementById('puntosCssIngles').innerHTML = puntuacionCssIngles
    }

  }
  xhttp.open("GET", "../xml/testCssIngles.xml");
  xhttp.send();
}

function puntuacionCssIngles2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacionCssInglesX == "yes") {
      puntuacionCssIngles++
      document.getElementById('puntosCssIngles').innerHTML = puntuacionCssIngles
    }

  }
  xhttp.open("GET", "../xml/testCssIngles.xml");
  xhttp.send();
}
function puntuacionCssIngles3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacionCssInglesX == "yes") {
      puntuacionCssIngles++
      document.getElementById('puntosCssIngles').innerHTML = puntuacionCssIngles
    }

  }
  xhttp.open("GET", "../xml/testCssIngles.xml");
  xhttp.send();
}
function puntuacionCssIngles4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionCssInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacionCssInglesX == "yes") {
      puntuacionCssIngles++
      document.getElementById('puntosCssIngles').innerHTML = puntuacionCssIngles
    }

  }
  xhttp.open("GET", "../xml/testCssIngles.xml");
  xhttp.send();
}