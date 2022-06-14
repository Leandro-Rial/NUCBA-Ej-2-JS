const Pizzas = [
    {
        id: 1,
        img: "https://mla-s1-p.mlstatic.com/890010-MLA43137481403_082020-F.jpg",
        name: "Muzzarella",
        ingredients: ["tomate", "queso muzzarella"],
        price: 550
    },
    {
        id: 2,
        img: "https://blog.facilitas.com.ar/wp-content/uploads/2018/11/Blogpost-7-1160x628.jpeg",
        name: "Jamon y morrones",
        ingredients: ["tomate", "queso muzzarella", "jamon", "morron"],
        price: 650
    },
    {
        id: 3,
        img: "https://t1.rg.ltmcdn.com/es/posts/7/0/2/pizza_fugazza_7207_orig.jpg",
        name: "Fugazzeta",
        ingredients: ["tomate", "queso muzzarella", "cebolla", "queso parmesano", "queso port salut"],
        price: 700
    },
    {
        id: 4,
        img: "https://t2.rg.ltmcdn.com/es/posts/5/2/6/pizza_napolitana_32625_orig.jpg",
        name: "Napolitana",
        ingredients: ["tomate", "queso muzzarella", "aceitunas", "oregano"],
        price: 850
    },
    {
        id: 5,
        img: "https://www.recetasderechupete.com/wp-content/uploads/2016/11/pizza_cuatro_quesos.jpg?width=1200&enable=upscale",
        name: "Cuatro quesos",
        ingredients: ["tomate", "queso Muzzarella", "queso Fontina", "queso Parmigiano Reggiano", "queso Gorgonzola"],
        price: 850
    },
    {
        id: 6,
        img: "https://www.hola.com/imagenes/cocina/recetas/20190911149183/pizza-margarita/0-717-935/pizza-m.jpg",
        name: "Margarita",
        ingredients: ["tomate", "queso Muzzarella", "albahaca"],
        price: 600
    }
];

localStorage.setItem('pizzas', JSON.stringify(Pizzas))

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