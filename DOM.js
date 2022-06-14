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

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
};

let pizzaObj

let acceptData = () => {
    valueInput = input.value;

    const Pizzas = JSON.parse(localStorage.getItem("pizzas"));

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