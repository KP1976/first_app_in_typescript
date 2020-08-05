// const person: {
// 	name: string;
// 	age: number;
// } = {
const person = {
	name: 'Krzysztof',
	age: 44,
	hobbies: ['Sport', 'Gotowanie'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
