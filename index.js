
function CalcularIMC(sexo, altura, peso) 
{
  altura = Math.round(altura) / 100;
  peso = Math.round(peso);
 
  var indice = (peso / Math.pow(altura, 2));
  var resultado = "";
  switch (sexo)
  {
    case "M":
      if (indice < 20)
      {
        resultado = "Usted tiene un peso mas bajo de lo normal. Consulte a su medico y/o nutricionista de confianza";
      }
      else if (indice >= 20 && indice < 24)
      {
        resultado = "FELICITACIONES. Su peso se encuentra dentro de los parametros normales segun la OMS";
      }
      else if (indice >= 24 && indice < 29)
      {
        resultado = "Usted tiene sobrepeso leve. Nada que unos laxantes no arreglen jajaja.";
      }
      else
      {
        resultado = "Usted tiene obesidad. Consulte a su medico para verificar su estado de salud.";
      }  
      break
    case "H":
      if (indice < 21)
      {
        resultado = "Usted tiene un peso mas bajo de lo normal. Consulte a su medico y/o nutricionista de confianza";
      }
      else if (indice >= 21 && indice < 25)
      {
        resultado = "FELICITACIONES. Su peso se encuentra dentro de los parametros normales segun la OMS";
      }
      else if (indice >= 25 && indice < 30)
      {
        resultado = "Usted tiene sobrepeso leve. Nada que unos laxantes no arreglen jajaja.";
      }
      else
      {
        resultado = "Usted tiene obesidad. Consulte a su medico para verificar su estado de salud.";
      }		   
      break
    default:
      resultado = "No se ha podido calcular. No ha indicado H (HOMBRE) o M (MUJER).";
  }
 
  return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
}

function MostrarResultadoIMC (sexo, altura, peso, indice)
{
  var mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
  alert (mensaje);
}	

var sexo = prompt("Por favor indique su sexo biologico, una 'H' para hombre o una 'M' para mujer:", "");
var altura = parseInt(prompt("Indique su altura en centímetros:", ""));
var peso = parseInt(prompt("Indique su peso en kilógramos:", ""));

var resultado = CalcularIMC(sexo, altura, peso);
MostrarResultadoIMC(sexo, altura, peso, resultado);  