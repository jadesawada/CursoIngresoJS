#include <stdio.h>
#include <stdlib.h>

int main()
{
    char sexo;
    sexo='m';
    float altura;
    int edad;
    int edadMaxima;
    int edadMinima;
    char seguir;
    seguir = 's';
    float alturaMaxima;
    float alturaMinima;

   do
   {
       printf("\n Ingrese su edad :");
       scanf("%d",&edad);
       printf("\n Ingrese su altura ;");
       scanf("%f",&altura);
       fflush(stdin);
       printf("\n ingrese el sexo(f/m):");
       scanf("%c",&sexo);
       fflush(stdin);
       printf("\n cargar otro? (s/n");
       scanf("%c",&seguir);

       if(edadMaxima<edad && sexo=='m')
       {
           alturaMaxima=altura;
           edadMaxima=edad;
       }if(edadMinima>edad)
       {

       }
    }while(seguir=='s');

    printf("Altura de la mujer mas vieja : %d %f" , edadMaxima,alturaMaxima);
    printf("Altura del mas joven : %d %f",edad);
    printf("Sexo del mas alto : %c" ,sexo);

    return 0;
}
