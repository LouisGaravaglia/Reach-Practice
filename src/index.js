// import React from 'react';
import food from './foods';
import { choice, remove } from './helpers'

const fruit = choice(food);
console.log(`I’d like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
const fruitsLeft = remove(food, fruit)
console.log(`I’m sorry, we’re all out. We have ${fruitsLeft} left.`);

// export default index;

// This file should import the fruits and both array helpers. It should then:

// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”