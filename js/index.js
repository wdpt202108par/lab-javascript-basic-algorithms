// Iteration 1: Names and Input
let hacker1 = 'Emmanuelle';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Eva';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

// Iteration 3: Loops
let name ='';

for (char of hacker1.toUpperCase()) {
	name += char + ' '
}
name.trim();
console.log(name);

let name2 ='';

for (let i= hacker2.length - 1; i >= 0; i--) {
	name2 += hacker2[i];
}

console.log(name2);


if (hacker1.localeCompare(hacker2) === -1) {
	console.log ("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log ("Yo, the navigator goes first definitely.")
} else {
	console.log ("What?! You both have the same name?")
}