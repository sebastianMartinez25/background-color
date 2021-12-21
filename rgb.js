window.addEventListener("load",asignarValores);

function asignarValores()
{
  var itera;
  var valores=[];
  valores[0]="tickmarks";
  valores[1]="tickmarks2";
  valores[2]="tickmarks3";
  var longitud=valores.length;
  var data;
for(itera=0;itera<longitud;itera++)
{
  data=valores[itera];
  generarOptions(data);
}
numero1.value=0;
numero2.value=0;
numero3.value=0;
}
function generarOptions(data)
{
  var i; var tickmarks; var option; var valor;
  for(i=0;i<256;i++)
  {
    tickmarks=document.getElementById(data);
    option=document.createElement("option");
    valor=option.innerHTML=(i);
    tickmarks.appendChild(option);
  }
}
numero1.addEventListener("contextmenu",validarResultadoBinario);
numero2.addEventListener("contextmenu",validarResultadoBinario);
numero3.addEventListener("contextmenu",validarResultadoBinario);
function validarResultadoBinario(e)
{
  e.preventDefault();
  return false;
}
colorRojo.addEventListener("change",colorear);
colorVerde.addEventListener("change",colorear);
colorAzul.addEventListener("change",colorear);

function colorear()
{
numero1.value=colorRojo.value;
numero2.value=colorVerde.value;
numero3.value=colorAzul.value;

var red=numero1.value;
var green=numero2.value;
var blue=numero3.value;

document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}
