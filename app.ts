// const person: {
//     name: string;
//     age: number;
// } =

//You can create an interface object seperate or utilize it in line
// or you can let typescript infere the types being created. This works for everything except for tuples
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] // Doing this creates an array of only two numbers are allowed with minimal exceptition
// } ={
//     name: 'ammon',
//     age: 29,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']  //tuple 
// };
//PUsh is an exception and will always add on to the tuple 
// person.role.push('admin') 
//person.role[1] = 8 would not work because it is not the correct type
// person.role = [9, 'admin' , ' author,m'] would not work because it exceeds the length

console.log(person.name)


let favoirteActivities: string[];
favoirteActivities = ['Sports']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) This is an error because type string doesn't support. 
}