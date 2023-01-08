
function conta(){

var tseculos = document.getElementById('seculos');
var seculos = Number(tseculos.value);
var seculos = 3153600000 * seculos

var tdecadas = document.getElementById('decadas');
var decadas = Number(tdecadas.value);
var decadas = 315360000 * decadas

var tanos = document.getElementById('anos');
var anos = Number(tanos.value);
 var anos = 31536000 * anos

var tmeses = document.getElementById('meses');
var meses = Number(tmeses.value);
var meses = 2635200 * meses

var tsemanas = document.getElementById('semanas');
var semanas = Number(tsemanas.value);
var semanas = 604800 * semanas

var tdias = document.getElementById('dias');
var dias = Number(tdias.value);
var dias = 86400 * dias

var thoras = document.getElementById('horas');
var horas = Number(thoras.value);
var horas = horas * 3600

var tminutos = document.getElementById('minutos');
var minutos = Number(tminutos.value);
var minutos = minutos * 60

var tsegundos = document.getElementById('segundos');
var segundos = Number(tsegundos.value)


var total = seculos + decadas + anos + semanas + dias + horas + minutos + segundos;

/*var segundostotais = document.getElementById('segundostotais')

segundostotais.innerHTML = ` O número de segundos totais é de ${total}`*/

document.getElementById('segundostotais').innerHTML ="The total number of Seconds is " + total

}



