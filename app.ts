// const person: {
//     name: string;
//     age: number;
// } =
const person = {
    name: 'ammon',
    age: 29,
    hobbies: ['Sports','Cooking']
};

console.log(person.name)


let favoirteActivities: string[];
favoirteActivities = ['Sports']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) This is an error because type string doesn't support. 
}