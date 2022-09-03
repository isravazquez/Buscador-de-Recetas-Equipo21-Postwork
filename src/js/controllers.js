const controllers = {
    search: function () { // Almacena lo que el usuario escribe en el buscador
        const searchButton = document.getElementById("button-addon2")
        searchButton.addEventListener("click", (event) => {
            event.preventDefault()
            const inputValue = document.getElementById("input").value
            localStorage.setItem('inputValue', inputValue); //Se lo que se escribió en localStorage
            return window.open("../search.html", "_self");
        })
    },
    list: async function () { //Lista los resultados de lo que el usario busco
        const cardsContainer = document.getElementById("cards-container")
        if (/^\s+$/.test(localStorage.getItem("inputValue")) || !localStorage.getItem("inputValue")) { //Si el usario no escribe nada o busca un elemento con espacio renderiza una alerta
            const warning = document.createElement("h2")
            const warningText = document.createTextNode("No olvides escribir una receta en el buscador.")
            warning.appendChild(warningText)
            warning.style.color = "red"
            warning.style.textAlign = "center"
            warning.style.margin = "2rem"
            cardsContainer.appendChild(warning)

        } else {
            const { meals } = await this.requestAPI(localStorage.getItem("inputValue"))//Si se encuentra un input se realiza la petición a través de una función (asíncrona)

            if (meals) {// Una vez encontrada la receta se procede a crear la lista.
                localStorage.setItem('foundMeals', JSON.stringify(meals)); // Se guarda la información obtenida para usarla en otra parte
                meals.forEach(meal => {
                    cardsContainer.appendChild(this.createCard(meal)) //Se usa la función createCard para crear cada carted e cada receta enconntrada
                })
            } else { // En casa de no encontrar ninguna receta renderiza una leyenda...
                const warning = document.createElement("h2")
                const warningText = document.createTextNode("No se encontró receta. Vuelve a intentar.")
                warning.appendChild(warningText)
                warning.style.color = "red"
                warning.style.textAlign = "center"
                warning.style.margin = "2rem"
                cardsContainer.appendChild(warning)
            }
        }
    },
    requestAPI: async function (mealToSearch) { // Función asíncrona para buscar recetas a la API
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealToSearch}`)//Petición al servidor. Se añade la palabra que el usario escribió.
            const meals = await response.json()
            return meals
        } catch (error) { // Se imprime error si algo falla
            console.log(error);
        }
    },
    createCard: function (meal) { // Función para crear cada carta en la búsqueda
        const link = document.createElement('a') // Creación del contenedor
        link.className = "col-12 col-sm-6 col-md-4"
        link.href = "/meal.html"
        link.id = meal.idMeal // IMPORTANTE: se usara el id para seleccionar unna receta

        const card = document.createElement("div")
        card.className = "card mx-auto my-2"

        link.appendChild(card)
        //Se agrega info del objeto obtenido por la API
        const img = document.createElement("img")
        img.className = "card-img"
        img.src = meal.strMealThumb
        img.alt = `${meal.strArea}-${meal.strCategory}-img`

        const cardTitleContainer = document.createElement("div")
        cardTitleContainer.className = "card-title"

        const cardTitle = document.createElement("h5")
        const cardTitleText = document.createTextNode(meal.strMeal)

        cardTitle.appendChild(cardTitleText)
        cardTitleContainer.appendChild(cardTitle)

        card.appendChild(img)
        card.appendChild(cardTitleContainer)

        link.addEventListener("click", () => { //IMPORTANTE: Función que permite seleccionar una receta a través del id
            const foundMeals = JSON.parse(localStorage.getItem("foundMeals"))
            console.log(foundMeals);
            const mealSelected = foundMeals.filter(function (item) { //Creación del objeto seleccionado a través de filtrar el array de objetos
                return item.idMeal == link.id //El id es lo que nos permite seleccionar una sola receta
            })
            localStorage.setItem("mealSelected", JSON.stringify(mealSelected))// IMPORTANTE: Se guarda en localStorage el objeto de la receta que se seleccionó
        })
        return link
    },
    random: async function () {
        const randomButton = document.getElementById("button-random-search")
        randomButton.addEventListener("click", async () => {
            const { meals: randomMeal } = await this.fetchAPI(`https://www.themealdb.com/api/json/v1/1/random.php`)
            localStorage.setItem("mealSelected", JSON.stringify(randomMeal))
            return window.open("../meal.html", "_self");
        })
    },
    fetchAPI: async function (apiMethod) {
        try {
            const response = await fetch(apiMethod)
            const data = await response.json()
            return data                   // Retorna todo el arreglo de objetos
        } catch (err) {
            console.error(err);
        }
    },

    retrieveRecipe: function () { //Función que recupera la receta seleccionada del localStorage
        return JSON.parse(localStorage.getItem("mealSelected"))[0]
    },

    retrieveIngredients: function (recipe) {  //Función que crea una lista de los N ingredientes junto con las cantidades que tiene el objeto recuperado
        let ingredients = []
        let measures = []
        let completeInfo = []
        for (const key in recipe) {
            if (key.includes('Ingredient') && recipe[key].length > 0) { //Verificamos que tenga información el campo ya que hay ingredientes sin info
                ingredients.push(recipe[key])
            } else if (key.includes('Measure') && recipe[key].length > 0) {
                measures.push(recipe[key])
            }
        }
        for (let i = 0; i < ingredients.length; i++) {  //Concatenamos los ingredientes junto con la cantidad 
            completeInfo.push(ingredients[i] + " - " + measures[i])
        }
        return completeInfo
    },

    insertIngredients: function (list, container) {  //Función que agrega los N ingredientes al elemento lista del HTML
        for (let i = 0; i < list.length; i++) {
            const ingredient = document.createElement('li')
            ingredient.textContent = list[i]
            ingredient.className = 'list-group-item'
            container.appendChild(ingredient)
        }
    },

    showInfo: function () {  //Función que muestra toda la información de la receta seleccionada en la pantalla de meal
        let name = document.getElementById('recipe')
        let image = document.getElementById('photo')
        let prep = document.querySelector('.prep')
        let ingredients = document.getElementById('ingredients')
        const recipe = this.retrieveRecipe()

        name.textContent = recipe['strMeal']    //Accedemos a los campos de nuestro objeto seleccionado para vaciarlos en la vista
        image.src = recipe['strMealThumb']
        prep.textContent = recipe['strInstructions']
        this.insertIngredients(this.retrieveIngredients(recipe), ingredients)
    },

    about: async function () {
        const modal = document.getElementById("modal-about");
        const button = document.getElementById('about-link');
        const close = document.getElementById("closeAbout");

        button.addEventListener('click', function () {
            modal.style.display = "block";
        })

        close.addEventListener('click', function () {
            modal.style.display = "none";
        })
    }
}

module.exports = controllers
