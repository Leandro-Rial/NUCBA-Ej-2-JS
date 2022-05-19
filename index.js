const Pizzas = [
    {
        id: 1,
        name: "Muzzarella",
        ingredients: ["tomate", "queso muzzarella"],
        price: 550
    },
    {
        id: 2,
        name: "Jamon y morrones",
        ingredients: ["tomate", "queso muzzarella", "jamon", "morron"],
        price: 650
    },
    {
        id: 3,
        name: "Fugazzeta",
        ingredients: ["tomate", "queso muzzarella", "cebolla", "queso parmesano", "queso port salut"],
        price: 700
    },
    {
        id: 4,
        name: "Napolitana",
        ingredients: ["tomate", "queso muzzarella", "aceitunas", "oregano"],
        price: 850
    },
    {
        id: 5,
        name: "Cuatro quesos",
        ingredients: ["tomate", "queso Muzzarella", "queso Fontina", "queso Parmigiano Reggiano", "queso Gorgonzola"],
        price: 850
    },
    {
        id: 6,
        name: "Margarita",
        ingredients: ["tomate", "queso Muzzarella", "albahaca"],
        price: 600
    }
];

let odd = []
let cheap = []
let names = []
let prices = []
let namesAndPrices = []
let nameAndPrice = []
let pizzaNameAndPrice = []

const arrayDePizzas = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i].id % 2 !== 0){
            odd.push(array[i].name);
        }
        if(array[i].price <= 600){
            cheap.push(array[i].name);
        }
        names.push(array[i].name);
        prices.push(array[i].price);
        namesAndPrices.push(array[i]);
    }

    for(let i = 0; i < namesAndPrices.length; i++){
        let pizzaNP = {name: namesAndPrices[i].name, price: namesAndPrices[i].price}
        nameAndPrice.push(pizzaNP)
    }

    pizzaNameAndPrice = nameAndPrice.map(({name, price}) =>
    `La pizza ${name} tiene un valor de $${price}`).join('\r\n');
    
    console.log(`Los pizzas que tiene id impares son ${odd.join(", ")}`);
    console.log(`Los pizzas que valen menos de $600 son ${cheap.join(", ")}`);
    console.log(`Los nombres de todas las pizzas son ${names.join(", ")}`);
    console.log(`Los precios de todas las pizzas son $${prices.join(", $")}`);
    console.log(pizzaNameAndPrice)
}

arrayDePizzas(Pizzas)