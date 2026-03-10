/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rationale:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rationale: No elements inside the array sum up to the target number
*/

export const twoSum = (arr: number[], target: number): boolean => {

  //TODO: First approach using two pointer/loops - o(n^2)
  // //First pointer
  for (let i = 0; i < arr.length -1; i++) {
    let first = arr[i];
    //Second pointer
    for (let j = 1; j < arr.length; j++) {
      let second = arr[j];
      if (first + second === target) {
        return true;
      }
    }
  }
  return false;

  //TODO: Second approach is using a for loop + while loop - o(n)
  // for(let i=0; i < arr.length; i++){
  //   let first = arr[i]
  //   let second = arr[i+1]

  //   while(arr.length){
  //     let sum = first + second;

  //     if(sum === target){
  //       return true;
  //     }else if(sum){

  //     }else if()
  //   }
  // }




};

const nums = [2, 5, 11, 15];
console.log(twoSum(nums, 7));
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

export const threeSum = (arr: number[], target: number): boolean => {
  return false;
};
