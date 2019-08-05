/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
     var largo;
     var ancho;
     var resultado;
     var radio;
     var pi=3.14;

function Rectangulo () 
{
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    resultado=((largo + ancho)*2)*3;

    alert ("El resultado es " + resultado);

}
function Circulo () 
{
    radio=parseInt(document.getElementById("Radio").value);
    
    resultado= (radio*pi)*3;

    alert("El resultado es: "+ resultado);
}
function Materiales () 
{
	
}