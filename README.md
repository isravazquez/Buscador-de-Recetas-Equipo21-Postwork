# Buscador de Recetas del Equipo21 BEDU

> Proyecto final del Modulo 2: Programación con JavaScript Santander 2022 elaborado por el Equipo 21.

Este proyecto es una aplicación web basada en una API externa. La API seleccionada es [TheMealDB](https://www.themealdb.com/api.php).
La aplicación tiene tres interfaces: 

### HOME
En ella puedes escribir cualquier receta que se pueda imaginar. Debe buscarse en inglés. También tiene un botón de **Receta Aleatoria** que busca una receta aleatoriamente. Si accedes a busqueda se renderizará la vista de *Search*, en cambio al seleccionar aleatoria se renderiza directamente la vista de *Meal*.

![home-img](https://drive.google.com/uc?export=view&id=1iIHrIOS_szjNAwG7eZZtgO-iNqG5AsRw)

### SEARCH
Cuando se hace la busqueda se renderiza esta vista. En esta se listan los elementos que se encontraron. Si no se encontró ninguno o se buscaron elementos no compatibles (como espacios en blanco sin más texto) se muestra una leyenda con una descripción. Se sigue mostrando la busqueda por si se desea hace una nueva. Al seleccionar una receta se renderiza la vista *Meal*.

![search-img](https://drive.google.com/uc?export=view&id=1R6QPaF_K9Z2Sk6PVVMSnnpCu_mZjNgIz)


### MEAL
Es la vista que renderiza la información del resultado. Se muestra la imagen con el nombre de la receta en un rectángulo. Una lista estilo block amarillo con los ingredientes de la receta con sus respectivas unidades, y finalmente la receta. Se puede regresar a *Home* con los vinculos.

![meal-img](https://drive.google.com/uc?export=view&id=1v41kFNyLLMRMH87UT07BhYD17Zd3qWeD)


## Construida con
- HTML
- SASS
- JavaScript

## Tecnológias
- webpack
- Bootstrap

## Recursos
- [VIDEO](https://drive.google.com/file/d/1yxJ6kvA6a--gOSovEftzYZmKCLrLkOTl/view?usp=sharing)

## Empezar

> Se necesita Node.js

Obten un clon del repostiorio: introduce lo siguiente:

```sh
git clone https://github.com/isravazquez/Buscador-de-Recetas-Equipo21-Postwork.git
```

## Configurar
Después de clonar el respositorio se accede a la carpeta del proyecto y se instalan dependencias:

```sh
cd Buscador-de-Recetas-Equipo21-Postwork
```
```sh
npm install
```
```sh
npm start
```

## Autores
|                |GitHub                                         |IMG                                                                                     |
|----------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
|Eduardo Trejo   |[Eduardo-UX01](https://github.com/Eduardo-UX01)|![Eduardo](https://drive.google.com/uc?export=view&id=1qQ_1xVqeLbh7_DWUEE-NhjdTuCjpl1o7)|
|Jaime Vazquez   |[isravazquez](https://github.com/isravazquez)  |![Jaime](https://drive.google.com/uc?export=view&id=1CBdfYc8IlgxSjAMSfRVY8TgDYo0UlkSd)  |
|Javier Luna     |[JavierLuna99](https://github.com/JavierLuna99)|![Javier](https://drive.google.com/uc?export=view&id=1Ik1j0gwk068BCMw-w4JOhRbO6soi3YB2) |

## Comenatrios
Tus comentarios son bienvenidos para mejorar. [Issues](https://github.com/isravazquez/Buscador-de-Recetas-Equipo21-Postwork/issues)

## Apoya
Si te gustó da ⭐️ ¡Gracias!

## Créditos
- [TheMealDB](https://www.themealdb.com/api.php) para la API externa.
- [José Guerrero](https://www.linkedin.com/in/jos%C3%A9-guerrero-3669481/) Nuesto experto en BEDU (Profesor).
- [Héctor Sifuentes](https://www.linkedin.com/in/hectorsifloz) Teaching Assistant.
- [Pedro Fragoso](https://www.linkedin.com/in/pedrofragosomaldonado) Teaching Assistant.
- [Erandi Garcia](https://www.linkedin.com/in/erandi-garc%C3%ADa-b74a341b2/) Ejecutiva de experiencia educativa.
- [BEDU](https://bedu.org/) Nuestra escuela.

## Licencia
MIT