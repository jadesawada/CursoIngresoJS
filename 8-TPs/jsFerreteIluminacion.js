/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
    var lamparas;
    var marca;
    var descuento;
    var descuentopormarca;

function CalcularPrecio () 
{
    lamparas=parseInt(document.getElementById("Cantidad").value);
    marca=document.getElementById("Marca").value;

    if(lamparas>=6)
    {

    descuento=(lamparas*35)/2;
    document.getElementById("precioDescuento").value=descuento;

    }while(lamparas==5);
    {
    if(lamparas==5&&marca=="ArgentinaLuz"){

        descuentopormarca=(lamparas*35)*40/100;
        document.getElementById("precioDescuento").value=descuento;
    }

    }
    if(lamparas!==5&&marca=="ArgentinaLuz"){
        descuentopormarca=(lamparas*35)*30/100;
        document.getElementById("precioDescuento").value=descuento;
    }
    
}
