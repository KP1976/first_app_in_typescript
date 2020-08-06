// const person: {
// 	name: string;
// 	age: number;
// } = {
var person = {
    name: 'Krzysztof',
    age: 44,
    hobbies: ['Sport', 'Gotowanie'],
    role: [2, 'autor']
};
person.role.push('admin');
person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
