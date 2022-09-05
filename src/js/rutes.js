// Rutas:
// Definimos en este archivo las funciones que deben ejecutarse según dónde el usario interactúe
import controllers from './controllers' // Importamos todas las funciones

export function rutes() {
    let rute = window.location.pathname

    switch (rute) {
        case"/index.html":
        case "/" :// Ruta home o index
            controllers.random()
            controllers.search()
            controllers.about()
            break
        case "/search.html": //En la sección de búsqueda
            controllers.list()
            controllers.search()
            break;
        case "/meal.html": //En la sección de receta seleccionada
            controllers.showInfo();
            break;
    }

}