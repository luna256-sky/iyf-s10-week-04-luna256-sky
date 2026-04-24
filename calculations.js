// Your age (example: 25 years old)
let age = 18;

// Age in days (approximate: 365 days per year)
let ageInDays = age * 365;

// Age in hours (24 hours per day)
let ageInHours = ageInDays * 24;

// The year you'll turn 100
let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - age);

// Display results
console.log("You are about " + ageInDays + " days old.");
console.log("You are about " + ageInHours + " hours old.");
console.log("You will turn 100 in the year " + yearTurn100 + ".");
