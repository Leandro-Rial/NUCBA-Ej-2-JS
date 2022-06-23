const PizzasArray = JSON.parse(localStorage.getItem("pizzas"));

// EJERCICIO NUEVO
let cardWrapper = document.getElementById("cards--wrapper");
cardWrapper.innerHTML = PizzasArray.map(({name, ingredients, img, price}, i) => {
    const ingredient = ingredients.map(ing => ing)
    
    return  (`<div class="pizza-card" data-idx="${i}">
                <div class="card__picture pizza__picture">
                    <img src=${img} alt=${name}>
                </div>
                <main class="card__main">
                    <div class="card-title">
                        <p class="main--p">${name}</p>
                    </div>
                    <div class="main--texts">
                        <span class="main--span">${ingredient.join(" <br> ")}</span>
                        <strong class="main--strong">$${price}</strong>
                    </div>
                </main>
            </div>`);
}).join('')

function myFunction() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const cardContainer = document.getElementById("cards--wrapper");
    const cardPizza = cardContainer.getElementsByClassName("pizza-card");
    const notFound = document.getElementById("not-found");

    for (i = 0; i < cardPizza.length; i++) {
        let title = cardPizza[i].querySelector(".card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cardPizza[i].style.display = "";
        } else {
            cardPizza[i].style.display = "none";
        }

        if(cardPizza[i].style.display === "none") {
            notFound.innerHTML = "Pizza not found"
        } else {
            notFound.innerHTML = ""
        }
    }
    
}

// EJERCICIO VIEJO
let title = document.getElementById("title");
let subtitle = document.getElementById("subtitle");
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let card = document.getElementById("card");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
});

let pizzaObj

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        card.innerHTML = ``;
        pizzaObj = null
        acceptData();
    }
};

let acceptData = () => {
    valueInput = input.value;

    for (const pizza of Pizzas) {
        if (Number(valueInput) === pizza.id) {
            pizzaObj = pizza
        }
    }

    if (!pizzaObj) {
        msg.innerHTML = "Sorry, but we couldn't find your pizza";
        title.textContent = "";
        subtitle.textContent = "";
        input.value = "";
    } else {
        msg.innerHTML = ""
        title.textContent = `${pizzaObj.name}`;
        subtitle.textContent = `$${pizzaObj.price}`;

        const { img, ingredients, name, price } = pizzaObj

        const ingredient = ingredients.map(ing => ing)

        let createCard = () => {
            card.innerHTML += `
                <div class="pizza-card--content">
                    <div class="card__picture">
                        <img src=${img} alt=${name}>
                    </div>
                    <main class="card__main">
                        <p class="main--p">${name}</p>
                        <div class="main--texts">
                            <span class="main--span">${ingredient.join(" <br> ")}</span>
                            <strong class="main--strong">$${price}</strong>
                        </div>
                    </main>
                </div>
            `;
            input.value = "";
        };

        createCard();
    }
};
