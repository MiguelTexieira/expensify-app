// // const person = {
// // 	name: 'Miguel',
// // 	age: 100,
// // 	location: {
// // 		city: 'St Albans',
// // 		temp: 19
// // 	}
// // };

// // const { name: firstName = 'Anonymous', age } = person;

// // console.log(`${firstName} is ${age}.`);

// // const { city, temp: temparature } = person.location;
// // if (city && temparature) {
// // 	console.log(`It's ${temparature} in ${city}.`);
// // }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = ['310 Hatfield Road', 'St Albans', 'Herts', 'AL1 4UN'];

// const [ , city, county = 'Bedfordshire' ] = address;

// console.log(`You are in ${city} ${county}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(` A medium ${coffee} costs ${mediumPrice}`);