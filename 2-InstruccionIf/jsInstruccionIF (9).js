function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio;

	aleatorio = document.getElementById ("aleatorio").value;

	Math.floor (Math.random () * 11)

	if(aleatorio >=1)
	{
		if(aleatorio <=10)
		{
			alert("Numero random" + aleatorio);
		}
	}
	



}//FIN DE LA FUNCIÓN