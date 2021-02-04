const num = [1, 2, 5, 33, 64, 7, 8, 9];
const part = num.slice(2, 5);
console.log(part);

const removed = num.splice(2, 3, 6);
console.log(removed);
console.log(num);

const together = num.join(", ");
console.log(together);
