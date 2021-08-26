import { useEffect } from "react";

export function useTitle({ openFood, orders}) {
    useEffect(() => {
        if (openFood) {
            document.title = openFood.name;
        } else {
            document.title = orders.length === 0 ? 
                `Mange ton bOb` 
                : orders.length === 1 ? 
                `[${orders.length}] item dans ton panier` 
                : `[${orders.length}] items dans ton panier`;
        }
    });
}