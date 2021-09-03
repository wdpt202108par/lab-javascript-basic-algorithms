// ITERATION 1: Names and Input
let hacker1 = "Emmanuelle";
let hacker2 = "Eva";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// ITERATION 2: Conditionals
// Check whether hacker1 or hacker2 is longer
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }  

// ITERATION 3: Loops
let upperName = "";
let reversedName = "";

// Add hacher1's capitalized letters to upperName and trim the trailing whitespace
for (char of hacker1.toUpperCase()) {
	upperName += char + " "
}

upperName.trim();

// Add hacker2's letters to reversedName in reverse order
for (let i = hacker2.length - 1; i >= 0; i--) {
	reversedName += hacker2[i];
}

console.log(upperName);
console.log(reversedName);

// Check whether hacker1 or hacker2 comes first in lexicographic order
if (hacker1.localeCompare(hacker2) === -1) {
	console.log ("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log ("Yo, the navigator goes first definitely.")
} else {
	console.log ("What?! You both have the same name?")
}

// BONUS 1
loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio ac arcu viverra feugiat vel auctor sem. Nam pulvinar ante vitae finibus tempus. In tempus dapibus tellus et cursus. Cras ut vestibulum ex. Duis blandit consequat dapibus. Phasellus dolor sem, iaculis vel ultricies non, dictum et neque. Suspendisse aliquet sit amet felis sit amet convallis. Pellentesque iaculis diam nec diam dapibus dapibus. Praesent sit amet congue urna. Fusce vel augue sed nulla dapibus laoreet. Sed vitae ipsum venenatis, lobortis metus non, fringilla libero. Cras interdum nunc et dui elementum, non suscipit velit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis consectetur justo et hendrerit malesuada. Quisque semper nisl non bibendum fermentum. Duis maximus velit non magna aliquam viverra at non nunc. Duis arcu nulla, maximus euismod molestie at, pulvinar vel quam. Integer eu viverra ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed lacinia eros. In hac habitasse platea dictumst. Praesent eu ipsum a metus iaculis imperdiet. Ut dapibus dolor vestibulum, congue ante et, aliquam libero. Praesent interdum, tortor non aliquam vulputate, ex erat varius augue, quis consequat felis ex varius nulla. Vivamus at lacus nec lorem rhoncus scelerisque. Sed venenatis arcu ex, non rutrum orci condimentum sit amet. Nullam non ultrices lacus, ut auctor arcu. Integer sit amet ornare dolor, sed lobortis tellus. Quisque nec aliquam lacus. Morbi lacinia erat eget mi rhoncus, eu dictum odio dictum. In vel pellentesque tortor. Proin tempor, dolor a mollis finibus, erat diam pellentesque mi, ut consectetur nisi enim et tellus. Donec vulputate pellentesque justo a commodo. Praesent rhoncus luctus odio, vitae ullamcorper massa euismod vel. Nulla in egestas mi. Nullam varius orci et ipsum molestie consectetur. In hac habitasse platea dictumst. Donec tincidunt diam at ipsum laoreet facilisis. Nulla at congue mauris. Nam sodales, orci eget vehicula vehicula, urna metus consequat ex, vel ornare mi enim vitae risus. Nulla aliquet, justo non tristique suscipit, libero ipsum vulputate risus, ac sodales orci neque dapibus dolor."

// Count the total number of words in loremIpsum based on number or whitespaces
wordCount = 0

for (char in loremIpsum) {
  if (char = " ") {
    wordCount ++;
  }
}

// if loremIpsum is not empty, add one to wordCount (because the last word is not followed by a whitespace)
if (loremIpsum.length > 0) {
  wordCount ++;
}

console.log(`Number of words: ${wordCount}`)

// Count the number of et Latin words in loremIpsum
etCount = 0

for (let i = 0; i < loremIpsum.length - 4; i++) {
	switch(loremIpsum.slice(i, i+4)) {
		case " et ":
		case " et,":
		case " et.":
		etCount ++;
		break;
		default:
		break;
	}
}

console.log(`Number of "et" words: ${etCount}`)

// BONUS 2
let phraseToCheck = `No 'x' in Nixon`; 
let phraseTemp = "";

// Add letters from phraseToCheck to phraseTemp
for (char of phraseToCheck.toLowerCase()) {
	if (char === ` `|| char === `,` || char === `!`|| char === `?`|| char === `.`||char === `"`|| char === `:`|| char === `;` || char === `'`) {
		continue;
	}
	else {
		phraseTemp += char;
	}	
}

console.log(phraseTemp);

// Split phraseTemp in two
let halfRounded = Math.trunc(phraseTemp.length / 2);
let firstHalf = "";
let secondHalf = "";

for (let i = 0; i < halfRounded; i++) {
	firstHalf += phraseTemp[i];
}	
console.log(firstHalf);

for (let i = phraseTemp.length -1; i >= 0; i--) {
	if (secondHalf.length >= halfRounded) {
		break;
	} else {
		secondHalf += phraseTemp[i];
	} 
}

console.log(secondHalf);

// Check whether those two halves are equal
if (firstHalf === secondHalf) {
	console.log(`"${phraseToCheck}" is a Palindrome!`)
} else {
	console.log(`"${phraseToCheck}" is not a Palindrome.`)
}