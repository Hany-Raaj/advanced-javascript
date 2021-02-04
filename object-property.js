const students = [
    { name: 'Omar Sunny', id: 21 },
    { name: 'Salman Shah', id: 31 },
    { name: 'Purnima', id: 41 }
]

const names = students.map(s => s.name);
console.log(names);

const bigger = students.filter(s => s.id > 25);
console.log(bigger);