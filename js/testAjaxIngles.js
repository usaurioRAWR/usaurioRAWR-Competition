//Variables que voy a utilizar
var y = -2;
var i = -1;
var txt = "";
var preguntaAjaxIngles = "";
var botonAjaxIngles1 = "";
var botonAjaxIngles2 = "";
var botonAjaxIngles3 = "";
var botonAjaxIngles4 = "";
var puntuacionAjaxIngles = 0;
var puntuacionAjaxInglesX = "";

//Cogera con AjaxIngles las siguientes preguntas

function siguientePreguntaAjaxIngles() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("question")[i];
    preguntaAjaxIngles = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("preguntaAjaxIngles").innerHTML = preguntaAjaxIngles;
    botonAjaxIngles1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("botonAjaxIngles1").innerHTML = botonAjaxIngles1;
    botonAjaxIngles2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("botonAjaxIngles2").innerHTML = botonAjaxIngles2;
    botonAjaxIngles3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("botonAjaxIngles3").innerHTML = botonAjaxIngles3;
    botonAjaxIngles4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("botonAjaxIngles4").innerHTML = botonAjaxIngles4;
  }
  xhttp.open("GET", "../xml/testAjaxIngles.xml");
  xhttp.send();
}

function puntuacionAjaxIngles1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacionAjaxInglesX == "yes") {
      puntuacionAjaxIngles++
      document.getElementById('puntosAjaxIngles').innerHTML = puntuacionAjaxIngles
    }

  }
  xhttp.open("GET", "../xml/testAjaxIngles.xml");
  xhttp.send();
}

function puntuacionAjaxIngles2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacionAjaxInglesX == "yes") {
      puntuacionAjaxIngles++
      document.getElementById('puntosAjaxIngles').innerHTML = puntuacionAjaxIngles
    }

  }
  xhttp.open("GET", "../xml/testAjaxIngles.xml");
  xhttp.send();
}
function puntuacionAjaxIngles3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacionAjaxInglesX == "yes") {
      puntuacionAjaxIngles++
      document.getElementById('puntosAjaxIngles').innerHTML = puntuacionAjaxIngles
    }

  }
  xhttp.open("GET", "../xml/testAjaxIngles.xml");
  xhttp.send();
}
function puntuacionAjaxIngles4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxInglesX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacionAjaxInglesX == "yes") {
      puntuacionAjaxIngles++
      document.getElementById('puntosAjaxIngles').innerHTML = puntuacionAjaxIngles
    }

  }
  xhttp.open("GET", "../xml/testAjaxIngles.xml");
  xhttp.send();
}
