const controllers = {
    search: function () {
        const searchButton = document.getElementById("button-addon2")
        searchButton.addEventListener("click", () => {
            const inputValue = document.getElementById("input").value
            localStorage.setItem('inputValue', inputValue);
            return window.open("../search.html", "_self");
        })
    },
    list: async function () {
        const cardsContainer = document.getElementById("cards-container")
        if (/\s/.test(localStorage.getItem("inputValue")) || !localStorage.getItem("inputValue")) {
            const warning = document.createElement("h2")
            const warningText = document.createTextNode("No olvides escribir una receta en el buscador")
            warning.appendChild(warningText)
            warning.style.color = "red"
            warning.style.textAlign = "center"
            warning.style.margin = "2rem"
            cardsContainer.appendChild(warning)

        } else {
            const { meals } = await this.requestAPI(localStorage.getItem("inputValue"))

            if (meals) {
                localStorage.setItem('foundMeals', JSON.stringify(meals));
                meals.forEach(meal => {
                    cardsContainer.appendChild(this.createCard(meal))
                })
            } else {
                const warning = document.createElement("h2")
                const warningText = document.createTextNode("No se encontró receta. Vuelve a intentar")
                warning.appendChild(warningText)
                warning.style.color = "red"
                warning.style.textAlign = "center"
                warning.style.margin = "2rem"
                cardsContainer.appendChild(warning)
            }
        }
    },
    requestAPI: async function (mealToSearch) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealToSearch}`)
            const meals = await response.json()
            return meals
        } catch (error) {
            console.log(error);
        }
    },
    createCard: function (meal) {
        const link = document.createElement('a')
        link.className = "col-12 col-sm-6 col-md-4"
        link.href = "#" //Posiblemente se quite si hacemos que una función redirija el enlace
        link.id = meal.idMeal

        const card = document.createElement("div")
        card.className = "card mx-auto my-2"

        link.appendChild(card)

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

        link.addEventListener("click", () => {

            const mealSelected = JSON.parse(localStorage.getItem("foundMeals")).filter(function(item){
                console.log(item.idMeal);
                console.log(link.id);
                item.idMeal == link.id
            })
            console.log(mealSelected);
        })
        return link
    }

}

module.exports = controllers
