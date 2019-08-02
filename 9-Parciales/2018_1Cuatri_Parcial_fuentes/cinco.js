function mostrar()
{


  var mensaje;

  planeta=prompt ("ingrese un planeta");

  switch (planeta){

    case "tierra":
        mensaje = "aca vivimos";
          break;


    case "mercurio":

    case "venus":
         mensaje = ""
          break;


    case "marte":

    case "jupiter":

    case "saturno":

    case "urano":

    case "neptuno":
          alert("aca hace mas frio");
          break;


    case "pluton":
         alert("No es un planeta valido");
          break;




  }
}
