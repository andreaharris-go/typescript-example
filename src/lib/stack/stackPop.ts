/**
 * stackPop() array number.
 * @param arr: number[]
 * @return number[]
 */
function stackPop(arr: number[]): number[] {
  arr.splice(arr.length - 1, 1)

  return arr
}

export default stackPop
