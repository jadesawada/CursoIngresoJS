function mostrar()
{

  var contador=0;
  var numero;
  var numeroDos;
  var suma;
  alert(numero);

  numeroDos=12;
  suma= numero*numeroDos;
  alert(suma);
  suma="3";//bien
  suma=3;//bien
  suma="lalala";//error
  //validar numeros, usamos el isNaN


  while((isNaN(suma))||(suma<0)||(suma>10))
  //isNan(suma)&&(suma<0)||(suma>10)[NO VA]
  {
    alert("error");
    suma=prompt ("error,reingrese solo numeros");
  }
    alert ("ingreso correcto" +suma);
    while(sexo!="f"||sexo!="m")//error poner &&

  /*
  if (isNaN(suma))
  {
    alert("error");

  }else{
    alert("bien");
  }


	//declarar contadores y variables



	//var respuesta="si";

	//while(respuesta!="no")*/
	{


	}




}//FIN DE LA FUNCIÓN
