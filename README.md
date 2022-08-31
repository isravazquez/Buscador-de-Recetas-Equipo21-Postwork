# Buscador de Recetas del Equipo21 BEDU

> Proyecto final del Modulo 2: Programación con JavaScript Santander 2022 elaborado por el Equipo 21.

Este proyecto es una aplicación web basada en una API externa. La API seleccionada es [TheMealDB](https://www.themealdb.com/api.php).
La aplicación tiene tres interfaces: 

### HOME
En ella puedes escribir cualquier receta que se pueda imaginar. Debe buscarse en inglés. También tiene un botón de **Receta Aleatoria** que busca una receta aleatoriamente. Si accedes a busqueda se renderizará la vista de *Search*, en cambio al seleccionar aleatoria se renderiza directamente la vista de *Meal*.


### SEARCH
Cuando se hace la busqueda se renderiza esta vista. En esta se listan los elementos que se encontraron. Si no se encontró ninguno o se buscaron elementos no compatibles (como espacios en blanco sin más texto) se muestra una leyenda con una descripción. Se sigue mostrando la busqueda por si se desea hace una nueva. Al seleccionar una receta se renderiza la vista *Meal*.


### MEAL
Es la vista que renderiza la información del resultado. Se muestra la imagen con el nombre de la receta en un rectángulo. Una lista estilo block amarillo con los ingredientes de la receta con sus respectivas unidades, y finalmente la receta. Se puede regresar a *Home* con los vinculos.

## Construida con
- HTML
- SASS
- JavaScript

## Tecnológias
- webpack
- Bootstrap

## Recursos
- [VIDEO]()
- [APP]()

## Empezar

> Se necesita Node.js

Obten un clon del repostiorio: introduce lo siguiente:
<git clone https://github.com/isravazquez/Buscador-de-Recetas-Equipo21-Postwork.git>

## Configurar
Después de clonar el respositorio se acede a la carpeta del proyecto y se instalan dependencias:
<cd Buscador-de-Recetas-Equipo21-Postwork>
<npm install>
<npm start>

## Autores
|                |GitHub                                         |IMG                          |
|----------------|-----------------------------------------------|-----------------------------|
|Eduardo Trejo   |[isravazquez](https://github.com/isravazquez)  |                             |
|Jaime Vazquez   |[JavierLuna99](https://github.com/JavierLuna99)|                             |
|Javier Luna     |[Eduardo-UX01](https://github.com/Eduardo-UX01)|                             |

## Comenatrios
Tus comentarios son bienvenidos para mejorar. [Issues](https://github.com/isravazquez/Buscador-de-Recetas-Equipo21-Postwork/issues)

## Apoya
Si te gustó da ⭐️ ¡Gracias!

## Créditos
- [TheMealDB](https://www.themealdb.com/api.php) para la API externa.
- José Guerrero Nuesto experto en BEDU.
- BEDU

