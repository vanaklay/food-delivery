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

export const useBobAsToppings = () => {
    const [items, setItems] = useState(getBobSelected());
    function incrementItem(index) {
        const newBobSelected = [...items];
        newBobSelected[index].quantity += 1;
        setItems(newBobSelected);
    }
    function decrementItem(index) {
        const newBobSelected = [...items];
        if (newBobSelected[index].quantity > 0) {
            newBobSelected[index].quantity -= 1;
            setItems(newBobSelected);
        }
    }

    const numberItemsSelected = items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    
    return {
        items,
        incrementItem,
        decrementItem,
        numberItemsSelected
    }
}

const toppingsList = [
    "Authentic",
    "Bomb",
    "Cheesy",
    "Thon",
    "Veggi",
    "Ginger"
];

const getBobSelected = () => {
    return toppingsList.map(t => ({
        name: t,
        quantity: 0
    }));
}

const getDefaultToppings = () => {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}