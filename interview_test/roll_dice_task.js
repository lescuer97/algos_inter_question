
// I needed to figure out possible forgoten dice rolls.

// I was given the know rolls, how many rolls I forgoten, and the average result of all rolled dices

// A = know dice rolls
// F the amount of forgoten dice rolls
// M = Average dice roll score

let a = [3,2,4,3]
let f = 2
let m = 4

let a2 = [1,5,6]
let f2 = 4
let m2 = 3

let a3 = [1,2,3,4]
let f3 = 4
let m3 = 6

function solution(A, F, M) {
    
    // add the know dice rolls
    let sumKnowRolls = A.reduce((acc, val) => acc+val,0);

    // total dice rolls
    const numberOfThrows = A.length + F;

    // the total forgotten points
    let missingSum = M*numberOfThrows - sumKnowRolls;

 
    // checks if it's mathematicly possible to do the calculation
    if(F > missingSum || missingSum / F > 6) {
        return [0]
    }
    let result = []
    
    // loops for the amount of unknown rolls
    // gives every 
    for (let i = 0; i < F; i++) {

    // divides the missing sum from the amount of missing throws and then reduce the throw amount
    // the result is floored because floats are not allowed
       result[i] =Math.floor(missingSum / F--);
      
    // decrese from the missing dice roll some the result
       missingSum -= result[i]
    }
    return result;
}


console.log(solution(a,f,m));
console.log(solution(a2,f2,m2));
console.log(solution(a3,f3,m3));