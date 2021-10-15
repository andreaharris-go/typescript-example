"use strict";
exports.__esModule = true;
/**
 * stackPush() array number.
 * @param arr: number[]
 * @param num: number
 * @return number[]
 */
function stackPush(arr, num) {
    arr[arr.length] = num;
    return arr;
}
exports["default"] = stackPush;
