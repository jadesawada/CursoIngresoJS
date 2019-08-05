/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

      var precio1;
      var precio2;
      var precio3;
      var suma;
      var promedio;
      var preciofinal;

function Sumar () 
{

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    suma=parseInt (precio1) +parseInt (precio2) +parseInt (precio3);

    alert("Suma de precios :" +suma);


}
function Promedio () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseint(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    promedio=((precio1) + (precio2) + (precio3))/3;

    alert("El promedio es: " + promedio);


}
function PrecioFinal () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    preciofinal= ((precio1)+(precio2)+(precio3))*21/100;

    alert("Precio final con IVA: " + preciofinal);


}