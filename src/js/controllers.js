export default {
    search: () => {
        const searchButton = document.getElementById("button-addon2")

        searchButton.addEventListener("click", () => {
            let inputValue = document.getElementById("input").value
            localStorage.setItem('inputValue', inputValue);
            return window.open("../search.html", "_self");
        })
    },
    requestAPI: async (mealToSearch) => {
        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealToSearch}`)
            let meals = await response.json()
            console.log(meals);
        } catch (error) {
            console.log(error);
        }
    }
    
}
