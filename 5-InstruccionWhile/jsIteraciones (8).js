function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	
	var seguir='si';

	while(seguir =="si"){
		numero = parseInt (prompt ("ingrese numero"));
		while(isNaN(numero)==true){
			alert("eso no es un numero");
			numero=parseInt(prompt("ingrese un numero"));
		}
		if(numero < 0)
		{
			negativo = negativo*numero;
			contNegativos = contNegativos + 1;
		}
		else {
			positivo = positivo + numero;
		}
		
		seguir = prompt("quiere ingresar otro numero?");
	}

	alert("el calculo de los numeros negativos es igual a" + negativo);
	alert("el calculo de los numeros positivos es igual a" + positivo);

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN