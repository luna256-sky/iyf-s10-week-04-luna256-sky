function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

// Function to calculate tip
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

// Testing the function
console.log(calculateTip(100));        // 15 (default 15%)
console.log(calculateTip(200, 10));    // 20 (10% tip)
console.log(calculateTip(50, 20));     // 10 (20% tip)
