function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador <=5)
	{
		numero= parseInt(prompt("ingrese numero"));

		while(isNaN (numero)==true)
		{
			alert ("eso no es un numero");
			numero =parseInt (prompt("ingrese un numero"));
		}
		contador=contador + 1;
		acumulador = acumulador + numero;

	}
      promedio = acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

//con Do While 

//var contador=0; 
//var acumulador =0
//var numero;
//do{ numero =parseint(promp("ingrese un numero"));
//acumulador= acumulador + numero;
//contador=contador + 1;
//}
//promedio =acumulador / contador;
//document.getElementById("suma").value=acumulador);
//document.gelElemntById("promedio").value=contador);