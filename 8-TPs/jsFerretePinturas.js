/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
   var centigrados;
   var Fahrenheit;
   
function FahrenheitCentigrados () 
{
    Fahrenheit=parseInt(document.getElementById("Temperatura").value);
    centigrados=(Fahrenheit-32)*5/9;
    alert(Fahrenheit + "Fahremheit son " + centigrados + "Centigrados");
}

function CentigradosFahrenheit () 
{
    centigrados=parseInt(document.getElementById("Temperatura").value);
    Fahrenheit=(centigrados*9/5 + 32);
    alert( centigrados + "Centigrados son " + Fahrenheit + "fahrenheit");
}
