// There is N quantity of apples in the orchard.

// there are trees arrenged in rows that are number  1 to N

// Alice and bob want to collect Two different amounts of apples from different rows so they don't disturb each other.

// write function(A,K,L)

// A = Array[number of appples in each apple tree]

// K = Alice amount of trees she wants to collect

//L = Bob  amount of trees he wants to collect
// the trees cannot be sorted they must be continious
// Alice and Bob can be separeted but each persons collection must be consecuive

// what is the maximum amount of apples they can collect?

const orchard = [6, 7, 35, 50, 1, 4, 155, 75, 3, 5, 7, 70, 1];

const alice = 2;
const bob = 2;

// sends the left over space from alice collection
function spaceChecker(array, applesTaken, otherPersonsCollection) {
  const arrayBack = array.slice(0, applesTaken[0]);
  const arrayFront = array.slice(applesTaken[1], array.length);

  if (
    arrayBack.length >= otherPersonsCollection ||
    arrayFront.length >= otherPersonsCollection
  ) {
    return [true, arrayBack.length, arrayFront.length, arrayBack, arrayFront];
  } else {
    return [false, 0, 0];
  }
}
function arrayLooperAdder(index, treeCount, array) {
  // grabs the section of the array
  const collectSlice = array.slice(index, treeCount);
  // adds up the new array
  const posibleCollect = collectSlice.reduce((a, c) => a + c, 0);
  return [posibleCollect, collectSlice.length];
}

function solution(orchard, alice, bob) {
  const totalCollectTrees = alice + bob;

  if (totalCollectTrees > orchard.length) {
    return -1;
  }

  let aliceHarvest = 0;

  // what section of the orchard alice grabed
  let aliceOrchardSection = undefined;
  // tells where is enough space for Bob
  let aliceSpaceCheckResult = undefined;

  for (let i = 0; i < orchard.length; i++) {
    const finalTreeCount = i + alice;

    const posibleCollect = arrayLooperAdder(i, finalTreeCount, orchard);

    if (posibleCollect[1] < alice) {
      break;
    }

    // checks if there is space for bob and the last saved collect is smaller
    const spaceCheck = spaceChecker(orchard, [i, finalTreeCount], bob);
    if (posibleCollect[0] > aliceHarvest && spaceCheck[0]) {
      aliceHarvest = posibleCollect[0];
      aliceOrchardSection = [i, finalTreeCount];
      aliceSpaceCheckResult = spaceCheck;
    }
  }

  let bobHarvest = 0;
  // console.log(aliceSpaceCheckResult[1]);
  // checks the first part of array;
  console.log(aliceSpaceCheckResult[1], aliceSpaceCheckResult[2]);
  if (aliceSpaceCheckResult[1] >= bob) {
    const bobArrayBeggining = orchard.slice(0, aliceOrchardSection[0]);
    for (let i = 0; i < bobArrayBeggining.length; i++) {
      const bobFinalTreeCount = i + bob;

      const posibleCollect = arrayLooperAdder(
        i,
        bobFinalTreeCount,
        bobArrayBeggining
      );

      if (posibleCollect[1] < bob) {
        break;
      }

      if (posibleCollect[0] > bobHarvest) {
        bobHarvest = posibleCollect[0];
      }
    }
  }

  if (aliceSpaceCheckResult[2] >= bob) {
    const bobArrayEnd = orchard.slice(aliceOrchardSection[1], orchard.length);

    for (let i = 0; i < bobArrayEnd.length; i++) {
      const bobFinalTreeCount = i + bob;

      const posibleCollect = arrayLooperAdder(
        i,
        bobFinalTreeCount,
        bobArrayEnd
      );

      if (posibleCollect[1] < bob) {
        break;
      }

      if (posibleCollect[0] > bobHarvest) {
        bobHarvest = posibleCollect[0];
      }
    }
  }
  const total = aliceHarvest + bobHarvest;

  return total;
}

// console.log(solution(orchard, alice, bob));
// console.log(solution(orchard, alice, bob));
console.log(solution([6, 7, 35, 50, 1, 80, 155, 75, 3, 5, 7, 70, 1], 1, 1));
console.log(solution([100, 200, 110], 1, 1));
