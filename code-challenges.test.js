// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
                                // Input: a array of strings
                                // Output: a shuffled array of strings, excluding the 0 index of the origional array 

                            // a) Create a test with an expect statement using the variable provided.
                            // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe('doTheShuffle', (arr) => {

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]

//                  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// const colors2 = [ "chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron" ]

//                   // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
// expect(doTheShuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]));
// expect(doTheShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]));
// });
// });
       

                                        // FAIL  ./code-challenges.test.js
                      // ✕ takes in an array, removes the first item from the array and shuffles the remaining content

                      // ● doTheShuffle › takes in an array, removes the first item from the array and shuffles the remaining content
                      //   ReferenceError: doTheShuffle is not defined

                                // b) Create the function that makes the test pass.
                                                // SORT METHOD: 
//           //declare the variable and create the function
// const doTheShuffle = (arr) => {
//           //create an that removes the 0 index of the origional array 
// const shuffledArray = [...arr.slice(1)];
//           // console.log(shuffledArray)
//           // Math.random() return a value between 0 & 0.999999 when its called
//           // The added `-0.5` is added to ensure a negative number 50% of the time so that .sort() does not arrange the values in ascending or descending order. 
// shuffledArray.sort((a,b) => Math.random() - 0.5);
// return shuffledArray;
// };
                      // console.log(doTheShuffle(colors1));
                                            // PASS  ./code-challenges.test.js
                      // ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

                                                  // FISHER YATES METHOD
// const doTheShuffle = (arr) => {
// const shuffledArray = [...arr.slice(1)]
//         // create a for loop that iterates through each index of the array is reverse order 
//         //initialize the variable 'i' to the index of the last element in  the arrray. The loop continues as long as i > 0
// for (let i= shuffledArray.length - 1 ; i> 0 ; i--){
//         // create a variable where each target index is a random number between the number of values in the array
// const j = Math.floor(Math.random() * (i + 1));
//         //shuffling the array, swaping variables using the temp variable 
// const temp = shuffledArray[i];
// shuffledArray[i] = shuffledArray[j];
// shuffledArray[j] = temp;
// }
// return shuffledArray
// }
                  // console.log(doTheShuffle(colors1));
                                          // PASS  ./code-challenges.test.js
                  // ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

                  // Using a While loop

// const doTheShuffle = (arr) => {
// const shuffledArray = [...arr.slice(1)];
//             //start with i initialized to the index
// let i = shuffledArray.length - 1;
//             // interates through while i is greater than 0
// while (i > 0) {
// const j = Math.floor(Math.random() * (i + 1));
// const temp = shuffledArray[i];
// shuffledArray[i] = shuffledArray[j];
// shuffledArray[j] = temp;
//             // i-- is at the bottom to ensure me move through the elements, give the function a termination point. 
// i--;
// }
// return shuffledArray;
// };

                                            // PASS  ./code-challenges.test.js
                        // ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
                  

                        // --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
            // input: an object of key, value pairs
            // output: an accumlated integer value

                      // a) Create a test with expect statements for each of the variables provided.
// describe('simpMath' , () => {
//   const votes1 = { upVotes: 13, downVotes: 2 }
//             // Expected output: 11
//   const votes2 = { upVotes: 2, downVotes: 33 }
//             // Expected output: -31
//   it(' takes in an object that contains up votes and down votes and returns the end tally', () => {
//     expect(simpMath(votes1)).toBe(11);
//     expect(simpMath(votes2)).toBe(-31)
//   });
// })
                                     // FAIL  ./code-challenges.test.js
                        // ✕  takes in an object that contains up votes and down votes and returns the end tally (1 ms)
                        //     ReferenceError: simpMath is not defined

                        // b) Create the function that makes the test pass.

                  //declare the variable and establish the function making the object a parameter
// const simpMath = (obj) => {
//                   // do the math that the question is asking for using '.' to reference the key value
// return obj.upVotes - obj.downVotes
// }
                  // console.log(simpMath(votes1))
                  // console.log(simpMath(votes2))

                                  // PASS  ./code-challenges.test.js
                      // simpMath  ✓  takes in an object that contains up votes and down votes and returns the end tally


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// input: takes in two arrays as arguments
//output: a single array with no duplicates

// a) Create a test with an expect statement using the variables provided.

describe('noDup' , (arr) => {
const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
it('takes in two arrays whos values are strings and returns a single string with no duplicates' , (arr) => {
  expect(noDup(dataTypesArray1,dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
});
});


                                  // b) Create the function that makes the test pass.
              // declare variable and setup function with the 2 arrays as a param
const noDup = (arr1,arr2) => {
              // create a variable that will combine the two arrays into a single array
const mixArr = arr1.concat(arr2)
              //create a variable that will use the spread operater to establish the new array, and us the Set method to remove duplicates
const fixArr = [...new Set(mixArr)]
              // give a return to get an output
return fixArr
}
              // console.log(noDup(dataTypesArray1, dataTypesArray2))