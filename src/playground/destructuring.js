// console.log('destructuring');

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// // const { name = 'Anonymous', age } = person;
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }


// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);



const address = ['1299 s Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, , state = 'New York', zip] = address;

// console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} is ${mediumPrice}`);

