const button = document.querySelector("#submit")

const submit = () => {
    const valueInput = document.querySelector("input").value

    if (valueInput === '') {
        alert("Please, complete the field")
    } else {
        const pizzaArr = []
    
        for (const pizza of Pizzas) {
            if (Number(valueInput) === pizza.id) {
                pizzaArr.push(pizza)
            }
        }

        if (!pizzaArr.length) {
            alert("Sorry, but we couldn't find your pizza")
            document.querySelector('h2').textContent = "";
            document.querySelector('h4').textContent = "";
        } else {
            document.querySelector('h2').textContent = `${pizzaArr[0].name}`;
            document.querySelector('h4').textContent = `${pizzaArr[0].price}`;
        }
    
        document.querySelector("input").value = "";
    }
    
}