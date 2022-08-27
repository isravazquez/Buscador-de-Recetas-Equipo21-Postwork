const controllers = {
    search: function () {
        const searchButton = document.getElementById("button-addon2")

        searchButton.addEventListener("click", () => {
            let inputValue = document.getElementById("input").value
            localStorage.setItem('inputValue', inputValue);
            return window.open("../search.html", "_self");
        })
    },
    requestAPI: async function (mealToSearch) {
        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealToSearch}`)
            let meals = await response.json()
            return meals
        } catch (error) {
            console.log(error);
        }
    },
    list: async function () {
        const cardsContainer = document.getElementById("cards-container")

        let meals = await this.requestAPI(localStorage.getItem("inputValue"))

        //console.log(meals);

        

    }

}

module.exports = controllers
