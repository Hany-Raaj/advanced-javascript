let bonus = 10;

function sum (first, second){
    var result = first + second + bonus;
    return result;
}

const output = sum(3, 5);
console.log(bonus);
console.log(output);