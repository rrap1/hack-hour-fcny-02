/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */

export const duplicateNumber = (array: number[]): number => {
  const duplicates: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (duplicates.includes(array[i])) {
      return array[i];
    } else {
      duplicates.push(array[i]);
    }
  }
  return 0;
};

console.log(duplicateNumber([1, 5, 4, 3, 6, 2, 7,7]));
/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */

export const duplicateNumberAdvanced = (array: number[]): number => {
  const newSet = new Set();

  //has()
  //size()
  //delete()
  //clear()
  //add()

  for (let i = 0; i < array.length ; i++) {
    if (newSet.has(array[i])) {
      return array[i];
    }
    newSet.add(array[i]);
  }

  return 0;
};

console.log(duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 3]));
