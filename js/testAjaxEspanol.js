//Variables que voy a utilizar
var y = -2;
var i = -1;
var txt = "";
var preguntaAjaxEspanol = "";
var botonAjaxEspanol1 = "";
var botonAjaxEspanol2 = "";
var botonAjaxEspanol3 = "";
var botonAjaxEspanol4 = "";
var puntuacionAjaxEspanol = 0;
var puntuacionAjaxEspanolX = "";

//Cogera con AjaxEspanol las siguientes preguntas

function siguientePreguntaAjaxEspanol() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("question")[i];
    preguntaAjaxEspanol = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("preguntaAjaxEspanol").innerHTML = preguntaAjaxEspanol;
    botonAjaxEspanol1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("botonAjaxEspanol1").innerHTML = botonAjaxEspanol1;
    botonAjaxEspanol2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("botonAjaxEspanol2").innerHTML = botonAjaxEspanol2;
    botonAjaxEspanol3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("botonAjaxEspanol3").innerHTML = botonAjaxEspanol3;
    botonAjaxEspanol4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("botonAjaxEspanol4").innerHTML = botonAjaxEspanol4;
  }
  xhttp.open("GET", "../xml/testAjaxEspanol.xml");
  xhttp.send();
}

function puntuacionAjaxEspanol1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacionAjaxEspanolX == "yes") {
      puntuacionAjaxEspanol++
      document.getElementById('puntosAjaxEspanol').innerHTML = puntuacionAjaxEspanol
    }

  }
  xhttp.open("GET", "../xml/testAjaxEspanol.xml");
  xhttp.send();
}

function puntuacionAjaxEspanol2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacionAjaxEspanolX == "yes") {
      puntuacionAjaxEspanol++
      document.getElementById('puntosAjaxEspanol').innerHTML = puntuacionAjaxEspanol
    }

  }
  xhttp.open("GET", "../xml/testAjaxEspanol.xml");
  xhttp.send();
}
function puntuacionAjaxEspanol3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacionAjaxEspanolX == "yes") {
      puntuacionAjaxEspanol++
      document.getElementById('puntosAjaxEspanol').innerHTML = puntuacionAjaxEspanol
    }

  }
  xhttp.open("GET", "../xml/testAjaxEspanol.xml");
  xhttp.send();
}
function puntuacionAjaxEspanol4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacionAjaxEspanolX = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacionAjaxEspanolX == "yes") {
      puntuacionAjaxEspanol++
      document.getElementById('puntosAjaxEspanol').innerHTML = puntuacionAjaxEspanol
    }

  }
  xhttp.open("GET", "../xml/testAjaxEspanol.xml");
  xhttp.send();
}
