function mostrar()
{
//tomo la edad  

    var edad;
    var estadoCivil;

    edad=document.getElementById ("edad").value;
    estadocivil=document.getElementById ("estadoCivil").value;


    if(edad < 18)
    {
       if(estadoCivil != "Soltero")
       {
           alert("Es muy pequeño para NO ser soltero");
       }
    }


}//FIN DE LA FUNCIÓN