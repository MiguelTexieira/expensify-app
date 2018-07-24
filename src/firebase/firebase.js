import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
// 	.on('value', (snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// })

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// })

// database.ref('expenses').push({
// 	description: 'Magazine',
// 	note: 'Was a good issue',
// 	amount: 699,
// 	createAt: 1532358976013
// });




// database.ref('notes/-LI6gIx94IPDQDTCX3pC').remove();


// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React, Angular'
// });

// const firebaseNotes = {
// 	notes: {

// 	}
// };

// const notes = [{
// 	id: '12',
// 	Title: 'First Note',
// 	body: 'This is my note'
// }, {
// 	id: '13',
// 	Title: 'Another Note',
// 	body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref()
// 	.on('value', (snapshot) => {
// 		const {name, job: { title, company }} = snapshot.val();
// 		console.log(`${name} is a ${title} at ${company}`);
// });

// const onValueChange = database.ref()
// 	.on('value', (snapshot) => {
// 		console.log(snapshot.val());
// 	});

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	})

// database.ref().set({
// 	name: 'Miguel Teixeira',
// 	age: 99,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Cape Town',
// 		country: 'South Africa'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Pretoria'
// });


// database.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Remove succeeded');
// 	})
// 	.catch((error) => {
// 		console.log('Remove failed: ' + error.message);
// 	});

