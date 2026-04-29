const numbers = [1, -2, 3, 4, -5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, -4, 6, 8, -10]

const nonNegative = numbers.filter(num => num >= 0);
console.log(nonNegative); // [1, 3, 4]

const firstBiggerThanTen = numbers.find(num => num > 10);
console.log(firstBiggerThanTen); // undefined

const product = numbers.reduce((acc, num) => acc * num, 1); 
console.log(product); // -120