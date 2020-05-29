// A very simple for loop counting to ten, adding a string and a variable identifier on each count until 10

/*
let firstName = "Ian";

for (i = 0; i < 10; i++) {
  console.log("hello " +  firstName);
}
*/
// And if we wanted to run through an array list.

/*
let firstNames = ["Abe", "Bob", "Chuck", "Dave"];
firstNames.push("Ewan");

for (i = 0; i < firstNames.length; i++) {
  console.log("Hello " +  firstNames[i]);
}
*/

// The .length means that the counter will run through the length of the called array and the console is logging the current array item indexed by [i] in the counting loop. You can also see .push which adds a new value to the end of the array.

// An example of a for-in loop. It looks very similar to the for loop below and it's asking the same question - make a pass of each item in the array and print the value to the console. 

/*
let firstNames = ["Abe", "Bob", "Chuck", "Dave"];
firstNames.push("Ewan");

for (let i in firstNames) {
  console.log("Hello " + firstNames[i]);
}

for (i = 0; i < firstNames.length; i++) {
  console.log("Hello " +  firstNames[i]);
}
*/

// the same loop using an object instead of array.

let firstNames = {name:"Abe", age:"40", shoesize:9.5, id: 8954587};


for (let key in firstNames) {
  console.log(key + ": " + firstNames[key] + ".");
}

// a few simple loops that can help with algorithms and data retrieval.