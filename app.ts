// const person: {
// 	name: string;
// 	age: number;
// } = {
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Krzysztof',
	age: 44,
	hobbies: ['Sport', 'Gotowanie'],
	role: [2, 'autor'],
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
