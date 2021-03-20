
// search for the user with the phone number that containes the given searchterm 
// if there is more  than one posible result, will be sorted by the smallest name

// A = Array of names
// B = Array of strings with numbers
// C = Search Term


var a = ["pim", "pom"]
var b = ["999999999", "777888999"]
var p = "88999"

var a2 =["sander", "amy", "ann", "michael"]
var b2 = ["123456789", "234567890", "789123456", "123123123"];
var p2 = "1"

function smallestString(stringArray) {
     const sort =  stringArray.sort((a,b) => a.length - b.length);
    return sort[0];
}

function solution(A, B, P) {
    // this stores the index of the results 
let arrayPlaces =  []

// this stores the names in case of multiple results
let arrayOfSelectedNames = []

let result;
// checks if the numbers array includes the search 
 for (let i = 0; i < B.length; i++) {
     if(B[i].includes(P)) {
        arrayPlaces.push(i);
     }
 }

 // checks if there is multiple contacts with a match
switch (arrayPlaces.length) {
   case 0:
      result = "NO CONTACT"
      break;
   case 1:
      result = A[arrayPlaces[0]];
      break;
   default:
      arrayPlaces.forEach(val => {
         arrayOfSelectedNames.push(A[val]);
     })
     result = smallestString(arrayOfSelectedNames);
}
//  if (arrayPlaces.length === 0) {
//     result = "NO CONTACT"
//  } else if (arrayPlaces.length === 1)  {
//     result = A[arrayPlaces[0]];
//  } else if (arrayPlaces.length > 1) {
//     arrayPlaces.forEach(val => {
//         arrayOfSelectedNames.push(A[val]);
//     })
//     result = smallestString(arrayOfSelectedNames);
//  }

 return result;
}

console.log(solution(a, b, p));
console.log(solution(a2, b2, p2));