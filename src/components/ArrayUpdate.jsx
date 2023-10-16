import { useState } from "react";

const [colors, setColors] = useState([
    'red', 'green', 'blue'
]);

const removeColor = (colorToRemove) => {
    const updatedColors = colors.filter((color) => {
        return color !== colorToRemove
    });

    setColors(update)
}