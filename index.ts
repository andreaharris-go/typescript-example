function push(arr: number[], num: number): number[] {
    arr[arr.length] = num

    return  arr
}

function pop(arr: number[]): number[] {
    arr.splice(arr.length - 1, 1)

    return arr
}

/**
 * If you are absolutely sure that #root element DOES exist in your DOM,
 * you can show TS your confidence with a ! operator.
 */
const el = document.getElementById('root')!

el.innerHTML += `<h1>START</h1>`

let arrNum: number[] = []

arrNum = push(arrNum, 10)
arrNum = push(arrNum, 9)
el.innerHTML += `<h2>PUSH 10 then 9</h2>`
arrNum.map(item => el.innerHTML += `<div>${item}</div>`)

arrNum = pop(arrNum)
el.innerHTML += `<h2>POP 1</h2>`
arrNum.map(item => el.innerHTML += `<div>${item}</div>`)
