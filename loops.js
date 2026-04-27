// 1. Print numbers 1–100
console.log("Numbers 1–100:");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers 1–50
console.log("\nEven numbers 1–50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 3. FizzBuzz
console.log("\nFizzBuzz 1–100:");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 4. Triangle of stars
console.log("\nTriangle of Stars:");
let rows = 5; // change this number for bigger/smaller triangle
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}
