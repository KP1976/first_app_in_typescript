// const person: {
// 	name: string;
// 	age: number;
// } = {
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Krzysztof',
// 	age: 44,
// 	hobbies: ['Sport', 'Gotowanie'],
// 	role: [2, 'autor'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN = 'ADMIN',
	READ_ONLY = 100,
	AUTHOR = 'AUTHOR',
}

const person = {
	name: 'Krzysztof',
	age: 44,
	hobbies: ['Sport', 'Gotowanie'],
	role: Role.ADMIN,
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

if (person.role === Role.AUTHOR) {
	console.log('is admin');
}
