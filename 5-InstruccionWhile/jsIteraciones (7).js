function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var seguir;
	var promedio;
	var numero;

	while(seguir == "s"){
		numero=parseInt(prompt("ingrese un numero"));
		acumulador= acumulador + numero;
		contador = contador + 1;
		seguir= prompt ("quiere ingresar otro numero?");

	}
	
	promedio =acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=contador;

}//FIN DE LA FUNCIÓN