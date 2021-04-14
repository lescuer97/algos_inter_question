let arr = ["100", "110", "010", "011", "100"];
// respuesta correcta [2, 3, 2, 1, 2]

let arr2 = ["0011", "0111", "0111", "0110", "0000"];
// [2, 3, 3, 2, 0]

function solution(cars) {
  let separatedStrings = [];

  // split the letters into arrays
  cars.forEach((car) => {
    let carArr = car.split("");
    separatedStrings.push(carArr);
  });

  let similarities = [];

  // loops the entire array of arrays
  for (let i = 0; i < separatedStrings.length; i++) {
    //loop the internal arrays for every letter and then every number in the other cars
    for (let j = 0; j < separatedStrings[i].length; j++) {
      separatedStrings.forEach((car, index) => {
        // skips if its the same car
        if (i === index) {
          return;
        }
        console.log("indexes: ", i, index);
        // console.log(j);
        console.log(separatedStrings[i][j], car[j]);
        // separatedStrings[i][j] === car[j]
      });
    }
  }
}
solution(arr);
// console.log(solution(arr));
