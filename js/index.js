// Iteration 1: Names and Input
const hacker1 = "Auriane"
// 1.2
console.log(`The driver's name is ${hacker1}`)

// 1.3
const hacker2 = "Léa"

//1.4
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    
  } 
  else if (hacker1.length < hacker2.length) {
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  
  else {
    
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }

// Iteration 3: Loops

//3.1

let upperCaseAndSpaceDriverName = "";
for (let i = 0 ; i < hacker1.length; i++) {
    upperCaseAndSpaceDriverName += hacker1[i].toUpperCase()+" ";
}

console.log (upperCaseAndSpaceDriverName);


//3.2

let reverseDriverName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseDriverName += hacker2[i];
}
console.log (reverseDriverName);

//3.3

if (hacker1 < hacker2) {

    console.log(`The driver's name goes first.`);
    
  } else if  (hacker1> hacker2) {
  
    console.log(`Yo, the navigator goes first definitely.`);

    } else {
  
    console.log(`What?! You both have the same name?`);
      
         }