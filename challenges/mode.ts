/*

Given an array of numbers, return the mode (the number that appears most often).
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8


*/
//The value that appears the most frequently in a data set 

//TODO:
type resultType = {
  [result:string]:number;
  
}
const mode = (array: number[]): number => {
  let mode: number = 0;
  let highest : number = 0;
//Use an object to keep count of the frequency that we see the number 
 const result:resultType = {};
 for (const element of array){
    result[element] = (result[element]|| 0) + 1;

 }
 //let results =  Object.entries(result).reduce((a,b)=> a[1] > b[1]? a:b)[0];
 //return results;

 for (const key in result){
  if(highest < result[key]){
    highest = result[key];
    mode = Number(key);
  }
  
 }
 return mode;
};

console.log(mode([3,2,4,3]))
/* most Effecient with one pass
type ResultType = {
  [result: string]: number;
};

const mode = (array: number[]): number => {
  const result: ResultType = {};
  let mode = 0;
  let highest = 0;

  for (const num of array) {
    result[num] = (result[num] || 0) + 1;

    if (result[num] > highest) {
      highest = result[num];
      mode = num;
    }
  }

  return mode;
};

console.log(mode([3,2,4,3]));

*/

/*

Extension:

Given an arbitrarily nested array of numbers, return the mode.
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the nested array structure,
although some of the inner nested arrays may be empty.

e.g.
modeNested([[3], [2, [4]], 3]) -> 3
modeNested([7, [[5, [8], 8], 2, 5]]) -> 8
modeNested([4, []]) -> 4 

*/

type NestedArray<T> = (T | NestedArray<T>)[];

const modeNested = (array: NestedArray<number>): number => {
  return 0;
};

export { mode, modeNested, NestedArray };
