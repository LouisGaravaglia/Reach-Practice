// import React from "react";

const choice = (items) => {
    const randomNum = Math.floor(Math.random() * items.length);
    return items[randomNum]
}

const remove = (items, item) => {
    if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        return items;
    } 
    return undefined;
}

export {choice, remove};

