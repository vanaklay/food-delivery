import { useState } from "react";

/**
 * 
 * @returns Return an object with the getter and setter of the food state
 */
export function useOpenFood() {
    const [openFood, setOpenFood] = useState();
    return {openFood, setOpenFood};
}