var romanToInt = function (s) {
  let numerals = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let array = s.split("");

  let result = 0;
  let skip = false;

  for (let i = 0; i < array.length; i++) {
    if (skip) {
      skip = false;
      continue;
    }
    const presentNumber = numerals.get(array[i]);
    const nextNumber = numerals.get(array[i + 1]);

    if (nextNumber > presentNumber) {
      console.log(nextNumber, presentNumber);
      result += nextNumber - presentNumber;
      skip = true;
    } else {
      result += presentNumber;
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
