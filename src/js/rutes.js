import controllers from './controllers'

export function rutes() {
    let rute = window.location.pathname

    switch (rute) {
        case "/" || "//index.html":
            controllers.search()

            break
        case "/search.html":
            controllers.requestAPI(localStorage.getItem("inputValue"))
            controllers.search()

            break;
        case "/meal.html":
            console.log("meal");
            break;
    }

}