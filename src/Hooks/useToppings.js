import { useState } from "react";

export const useToppings = (defaultTopping) => {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings());
    function checkTopping(index) {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }
    return {
        toppings,
        checkTopping
    };
}

const toppingsList = [
    "Authentic",
    "Bomb",
    "Cheesy",
    "Thon",
    "Veggi",
    "Ginger"
];

const getDefaultToppings = () => {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}