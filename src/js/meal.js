const receta1 = { "idMeal": "52883", "strMeal": "Sticky Toffee Pudding", "strDrinkAlternate": null, "strCategory": "Dessert", "strArea": "British", "strInstructions": "Preheat the oven to 180C\/160C Fan\/Gas 4. Butter a wide shallow 1.7-litre\/3-pint ovenproof dish.\r\nPut the butter, sugar, eggs, flour, baking powder, bicarbonate of soda and treacle into a mixing bowl. Beat using an electric handheld whisk for about 30 seconds or until combined. Pour in the milk gradually and whisk again until smooth. Pour into the prepared dish. Bake for 35\u201340 minutes or until well risen and springy in the centre.\r\nTo make the sauce, put all the ingredients into a saucepan and stir over a low heat until the sugar has dissolved and the butter has melted. Bring to the boil, stirring for a minute.\r\nTo serve, pour half the sauce over the pudding in the baking dish. Serve with the cream or ice cream.", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/xqqqtu1511637379.jpg", "strTags": "Pudding,Cake,Desert", "strYoutube": "https:\/\/www.youtube.com\/watch?v=Wytv3bjqJII", "strIngredient1": "Butter", "strIngredient2": "Muscovado Sugar", "strIngredient3": "Eggs", "strIngredient4": "Self-raising Flour", "strIngredient5": "Baking Powder", "strIngredient6": "Bicarbonate Of Soda", "strIngredient7": "Black Treacle", "strIngredient8": "Milk", "strIngredient9": "Double Cream", "strIngredient10": "Butter", "strIngredient11": "Muscovado Sugar", "strIngredient12": "Black Treacle", "strIngredient13": "Double Cream", "strIngredient14": "Vanilla Extract", "strIngredient15": "", "strIngredient16": "", "strIngredient17": "", "strIngredient18": "", "strIngredient19": "", "strIngredient20": "", "strMeasure1": "100g ", "strMeasure2": "175g", "strMeasure3": "2 large", "strMeasure4": "225g", "strMeasure5": "1 tsp ", "strMeasure6": "1 tsp ", "strMeasure7": "3 tbs", "strMeasure8": "275ml", "strMeasure9": "to serve", "strMeasure10": "100g ", "strMeasure11": "125g", "strMeasure12": "1 tbs", "strMeasure13": "300ml ", "strMeasure14": "1 tsp ", "strMeasure15": "", "strMeasure16": "", "strMeasure17": "", "strMeasure18": "", "strMeasure19": "", "strMeasure20": "", "strSource": "https:\/\/www.bbc.co.uk\/food\/recipes\/marys_sticky_toffee_41970", "strImageSource": null, "strCreativeCommonsConfirmed": null, "dateModified": null }
const receta2 = { "idMeal": "52780", "strMeal": "Potato Gratin with Chicken", "strDrinkAlternate": null, "strCategory": "Chicken", "strArea": "Unknown", "strInstructions": "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qwrtut1468418027.jpg", "strTags": null, "strYoutube": "https:\/\/www.youtube.com\/watch?v=p3u8eiy3yHI", "strIngredient1": "Potatoes", "strIngredient2": "Onions", "strIngredient3": "Olive Oil", "strIngredient4": "Chicken Stock", "strIngredient5": "Creme Fraiche", "strIngredient6": "Parmesan", "strIngredient7": "Chicken Breasts", "strIngredient8": "Bacon", "strIngredient9": "Spinach", "strIngredient10": "Peas", "strIngredient11": "", "strIngredient12": "", "strIngredient13": "", "strIngredient14": "", "strIngredient15": "", "strIngredient16": null, "strIngredient17": null, "strIngredient18": null, "strIngredient19": null, "strIngredient20": null, "strMeasure1": "800g", "strMeasure2": "3", "strMeasure3": "2 tblsp", "strMeasure4": "100ml", "strMeasure5": "1 pot", "strMeasure6": "Topping", "strMeasure7": "4", "strMeasure8": "4", "strMeasure9": "Topping", "strMeasure10": "Topping", "strMeasure11": "", "strMeasure12": "", "strMeasure13": "", "strMeasure14": "", "strMeasure15": "", "strMeasure16": null, "strMeasure17": null, "strMeasure18": null, "strMeasure19": null, "strMeasure20": null, "strSource": "https:\/\/www.instagram.com\/p\/BHxR7hYBJ6P", "strImageSource": null, "strCreativeCommonsConfirmed": null, "dateModified": null }


let recetas = []
recetas.push(receta1)
recetas.push(receta2)

let nombre = document.getElementById('recipe')
let imagen = document.getElementById('photo')
let preparacion = document.querySelector('.prep')
let ingredientes = document.getElementById('ingredientes')
let recetaSeleccionada = {}

function encontrarPorNombre(nombre) {
    for (const receta of recetas) { //Recuperar receta de un arreglo de recetas a partir de un nombre de una receta
        for (const key in receta) {
            if (receta[key] == nombre) {
                console.log('found');

                return receta
            }
        }
    }
    console.log('not found');
}

function recuperarIngredientes(receta) { //funcion para recuperar los n ingredientes de la receta encontrada, ya que pueden variar en cantidad
    let ingredientesReceta = []
    for (const key in receta) {
        if (key.includes('Ingredient') && receta[key].length > 0) {
            ingredientesReceta.push(receta[key])
        }
    }
    return ingredientesReceta
}
function insertarIngredientes(lista) {  //funcion para crear n elementos en la lista de ingredientes
    for (let i = 0; i < lista.length; i++) {
        const ingrediente = document.createElement('li')
        ingrediente.textContent = lista[i]
        ingrediente.className = 'list-group-item' 
        ingredientes.appendChild(ingrediente)
    }
}

recetaSeleccionada = encontrarPorNombre('Sticky Toffee Pudding')

nombre.textContent = recetaSeleccionada['strMeal'] 
imagen.src = recetaSeleccionada['strMealThumb']
preparacion.textContent = recetaSeleccionada['strInstructions']

insertarIngredientes(recuperarIngredientes(recetaSeleccionada)); 

