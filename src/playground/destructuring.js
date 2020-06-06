
const person = {
    name: 'Sean',
    age: 27,
    location: {
        city: 'Charlotte',
        temp: 89
    }
}

const {name, age} = person;



const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher;


const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [order, , price] = item;
console.log(`A medium ${order} costs ${price}`);