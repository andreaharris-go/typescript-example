"use strict";
exports.__esModule = true;
/**
 * stackPop() array number.
 * @param arr: number[]
 * @return number[]
 */
function stackPop(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
}
exports["default"] = stackPop;
