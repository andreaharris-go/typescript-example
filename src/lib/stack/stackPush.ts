/**
 * stackPush() array number.
 * @param arr: number[]
 * @param num: number
 * @return number[]
 */
function stackPush(arr: number[], num: number): number[] {
  arr[arr.length] = num

  return arr
}

export default stackPush
