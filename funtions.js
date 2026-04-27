// 1. Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials from a full name
function getInitials(fullName) {
    let parts = fullName.split(" "); // split into words
    let initials = parts.map(word => word[0].toUpperCase()).join("");
    return initials;
}

// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// --------------------
// Testing the functions
// --------------------
console.log("Area:", calculateArea(5, 10)); // 50
console.log("Temp:", celsiusToFahrenheit(0)); // 32
console.log("Is Even (4):", isEven(4)); // true
console.log("Is Even (7):", isEven(7)); // false
console.log("Initials:", getInitials("John Doe")); // JD
console.log("Reverse:", reverseString("hello")); // olleh
