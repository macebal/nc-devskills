# Proyecto tipo entrevista de NewCombin

## Consigna
* Crear en una nueva carpeta el siguiente sitio web
![alt text](https://github.com/newcombin/devskills/blob/main/design.png "Diseño web")
* Los datos del formulario deben ser enviados a la API, la tabla de la derecha debe recibir los datos de la misma al cargarse el sitio y luego de cada insercion exitosa
* El boton reset debe limpiar los campos del formulario
* El boton save debe enviar los datos a la API
* El número de seguro social (ssn), es único, y no puede repetirse en la lista.
* En caso de un intento de inserción erroneo, se debe informar dicho error

## Descripcion
El sitio esta dividido en 2 carpetas `api` y `website`. En la carpeta `api` se encuentran los archivos para ejecutar la API, provistos por NewCombin.
En la carpeta `website` se encuentra el sitio web creado con React y Bootstrap.
Dentro de la carpeta `website` hay otra llamada `api` que contiene el archivo de interacción con la API.

## Utilización
* Ejecutar el script `serve` de la carpeta `api` para inicializar la API.
* Ejecutar el script `start` de la carpeta `website` para inicializar el resto del sitio.