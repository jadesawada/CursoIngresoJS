/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1=document.getElementById("precioUno").value;
    precio2=document.getElementById("precioDos").value;
    precio3=document.getElementById("precioTres").value;

    suma=parseInt (precio1) +parseInt (precio2) +parseInt (precio3);

    alert("Suma de precios :" +suma);


}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}